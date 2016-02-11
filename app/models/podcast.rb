class Podcast < ActiveRecord::Base
  # require "rmagick"
  include Magick
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

    i_sum = feed.itunes_summary if feed.respond_to? :itunes_summary

    j_sum = feed.description if feed.respond_to? :description

    description = i_sum || j_sum

    p = Podcast.new(rss_url: rss_url,
                    title: feed.title,
                    description: description,
                    image_url: image
                  )
    p.background_color = p.get_background_color
    p.save!

    entires = [MAX_EPISODES, feed.entries.length].min



    entires.times do |idx|
      ep = feed.entries[idx]

      k_sum = ep.itunes_summary if ep.respond_to? :itunes_summary

      l_sum = ep.summary if ep.respond_to? :summary

      ep_description = l_sum || k_sum

      e = p.episodes.new( title: ep.title,
                          mime_type: ep.enclosure_type,
                          feedjira_id: ep.entry_id,
                          description: ep_description,
                          episode_url: ep.enclosure_url,
                          publication_date: ep.published,
                          duration: self.secondify(ep.itunes_duration)
                        )
      e.save!
    end
    logger.info "Podcast #{p.title} Added to Database"
    return p
  rescue ArgumentError, Magick::ImageMagickError, URI::InvalidURIError
    logger.error "Error occured trying to add Podcast URI \'#{rss_url}\' to DB"
  end


  def get_background_color
    i = ImageList.new(self.image_url)
    small_i = i.scale(1,1)
    hue = nil
    small_i.each_pixel {|px| hue = px.to_hsla.first}
    return "hsl(#{hue}, 100%, 85%)"
  end









end
