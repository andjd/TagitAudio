class Api::PodcastsController < ApplicationController
  def create
    feed = params[:podcast][:rss_url]
    if @pod = Podcast.includes(:episodes).find_by_rss_url(feed)
      render :show, satus: :found
    else
    	# Podcast.digest_rss_feed(feed)
      RssProcessor.perform_async(feed)
      render json: [], status: :accepted
    end
  end
  def show
    @pod = Podcast.find(params[:id])
    render :show
  end

end
