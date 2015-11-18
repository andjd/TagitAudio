class Api::EpisodesController < ApplicationController
  def index
    @eps = Episode.all
    render :index
  end

  def show
    @eps = [Episode.find(params[:id])]
    render :index
  end
end
