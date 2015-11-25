class Podcast < ActiveRecord::Base
  MAX_EPISODES = 5

  validates :title, :description, :rss_url, presence: true

  has_many :episodes, dependent: :destroy
  
  has_many :followers,
    through: :follows,
    source: :user

    MULTIPLIER = [1,60,3600,86400]

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
    feed = Feedjira::Feed.fetch_and_parse(rss_url)

    image = feed.itunes_image ? feed.itunes_image : nil

    p = Podcast.new(rss_url: rss_url,
                    title: feed.title,
                    description: feed.itunes_summary,
                    image_url: image
                  )
    p.save!

    entires = [MAX_EPISODES, feed.entries.length].min



    entires.times do |idx|
      ep = feed.entries[idx]

      e = p.episodes.new( title: ep.title,
                          mime_type: ep.enclosure_type,
                          feedjira_id: ep.entry_id,
                          description: ep.summary,
                          episode_url: ep.enclosure_url,
                          publication_date: ep.published,
                          duration: self.secondify(ep.itunes_duration)
                        )
      e.save!
    end
    return p

  end

end
