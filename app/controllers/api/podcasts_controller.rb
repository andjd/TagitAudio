class Api::PodcastsController < ApplicationController
  def create
    feed = params[:podcast][:rss_url]
    if @pod = Podcast.includes(:episodes).find_by_rss_url(feed)
      render text: @pod.id, status: :found
    else
    	# Podcast.digest_rss_feed(feed)
      RssProcessor.perform_async(feed)
      render json: {}, status: :accepted
    end
  end

  def ready_yet?
    feed = params[:podcast][:rss_url]
    if @pod = Podcast.includes(:episodes).find_by_rss_url(feed)
      render text: @pod.id.to_s, status: :found
    elsif Sidekiq::Queue.new.map(&:args).map(&:first).include?(feed)
      render json: {}, status: :processing
    else
      render json: {}, status: :unprocessable_entity
    end
  end

  def show
    @pod = Podcast.find(params[:id])
    render :show
  end

end
