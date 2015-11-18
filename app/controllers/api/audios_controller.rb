class Api::AudiosController < ApplicationController
  def show
    redirect_to Episode.find(params[:episode_id]).episode_url
  end
end
