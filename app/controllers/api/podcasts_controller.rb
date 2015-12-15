class Api::PodcastsController < ApplicationController
  def create
    feed = params[:podcast][:rss_url]
    if Podcast.find_by_rss_url(feed)
      render text: "podcast is already in system"
    else
      p = Podcast.digest_rss_feed(feed)
      redirect_to episodes_url
    end
  end

end
