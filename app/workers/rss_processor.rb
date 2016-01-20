class RssProcessor
	include Sidekiq::Worker
	def perform(feed_url)
		Podcast.digest_rss_feed(feed_url)
	end
end

