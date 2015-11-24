class Api::AnnotationsController < ApplicationController
  def create
    ep = Episode.find(params[:episode_id])

    if ep
      time = params[:annotation][:percentLocation] * ep.duration
      if (@annotation = ep.annotations.create!(params.require(:annotation).permit(:user_id, :body).merge({time: time})))
          @eps = [ep]
          render "api/episodes/index"
      else
        render json: {}, status: :unprocessable_entity
      end
    end
  end

  def show
    @annotation = Annotation.find(params[:id])

    if @annotation
      render :show
    else
      render json: {}, status: :not_found
    end
  end


  def index
    ep = Episode.find(params[:episode_id])
    @annotations = ep.annotations

    if @annotation
      render :index
    else
      render json: {}, status: :not_found
    end
  end
end
