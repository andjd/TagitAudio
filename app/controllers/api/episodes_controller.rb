class Api::EpisodesController < ApplicationController
  def index
    @eps = Episode.includes(:podcast, :annotations).all
    render :index
  end

  def show
    @eps = [Episode.includes(:podcast, :annotations).find(params[:id])]
    render :index
  end
end
