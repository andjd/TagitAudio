class Api::EpisodesController < ApplicationController
  def index
    eps = Episode.all

    render json: eps
  end

  def show
    ep = Episode.find(params[:id])
    render json: ep
  end
end
