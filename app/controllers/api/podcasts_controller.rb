class PodcastsController < ApplicationController
  def create
    feed = params[:podcast][:rss_url]
    if Podcast.find_by_rss_url(feed)
      render text: "podcast is already in system"
    else
      p = Podcast.digest_rss_feed(feed)
      render json: p
    end
  end
end
