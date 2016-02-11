class Podcast < ActiveRecord::Base
  # require "rmagick"
  include Magick
  require 'set'
  MAX_EPISODES = 15

  validates :title, :description, :rss_url, presence: true

  include PgSearch
  multisearchable against: [:title, :description]

  has_many :episodes, dependent: :destroy

  has_many :follows

  has_many :followers,
    through: :follows,
    source: :user


    MULTIPLIER = [1,60,3600,86_400]  # ... 525_600.minutes

    def self.secondify(duration)
      t = duration.split(":")
      secs = 0
      i = 0
      while !t.empty? do
        el = t.pop
        secs += el.to_i * MULTIPLIER[i]
        i += 1
      end
      return secs
    end



  def self.digest_rss_feed(rss_url)
    return nil if Podcast.find_by_rss_url(rss_url)

    raw = Faraday.get(rss_url).body

    feed = Feedjira::Feed.parse_with(Feedjira::Parser::ITunesRSS, raw)

    image = (feed.respond_to? :itunes_image) ? feed.itunes_image : nil

    if feed.respond_to? :itunes_summary
      description = feed.itunes_summary
    elsif feed.respond_to? :description
      description = feed.description
    else
      description = nil
    end


    p = Podcast.new(rss_url: rss_url,
                    title: feed.title,
                    description: description,
                    image_url: image
                  )
    p.background_color = p.get_background_color
    p.save!

    entires = [MAX_EPISODES, feed.entries.length].min



    entires.times do |idx|
      p.add_episode feed.entries[idx]
    end
    return p

  end

  def self.update_episodes
    Podcast.includes(:episodes).all.each do |pod|
      feed = Feedjira::Feed.parse_with(Feedjira::Parser::ITunesRSS, Faraday.get(pod.rss_url).body)
      episodes = pod.episodes.load
      ids = Set.new(episodes.map(&:feedjira_id))
      titles = Set.new(episodes.map(&:title))
      urls = Set.new(episodes.map(&:episode_url))
      count = 0
      feed.entries.length.times do |idx|
        ep = feed.entries[idx]

        break if ids.include?(ep.entry_id) ||
                 titles.include?(ep.title) ||
                 urls.include?(ep.enclosure_url) ||
                 count >= 15

        pod.add_episode ep
        count += 1
      end
    end
    nil
  end


  def get_background_color
    i = ImageList.new(self.image_url)
    small_i = i.scale(1,1)
    hue = nil
    small_i.each_pixel {|px| hue = px.to_hsla.first}
    return "hsl(#{hue}, 100%, 85%)"
  end

  def add_episode ep
    e = self.episodes.new(title: ep.title,
                          mime_type: ep.enclosure_type,
                          feedjira_id: ep.entry_id,
                          description: ep.summary || "no summary",
                          episode_url: ep.enclosure_url,
                          publication_date: ep.published,
                          duration: Podcast.secondify(ep.itunes_duration)
                      )
    e.save!
  end









end
