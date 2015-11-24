class Api::EpisodesController < ApplicationController
  def index
    @eps = Episode.includes(:podcast, :annotations).all
    render :index
  end

  def trending
    @eps = Episode.includes(:podcast, :annotations).order(:annotations_count).reverse_order.first(7)
    render :index
  end

  def newest
    @eps = Episode.includes(:podcast, :annotations).order(:publication_date).reverse_order.first(7)
    render :index
  end

  def following
    @eps = Episode.includes(:podcast, :annotations).all
    render :index
  end

  def show
    @eps = [Episode.includes(:podcast, :annotations).find(params[:id])]
    render :index
  end
end
