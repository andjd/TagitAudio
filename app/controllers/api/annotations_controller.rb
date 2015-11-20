class Api::AnnotationsController < ApplicationController
  def create
    ep = Episode.find(params[:episode_id])

    if ep &&
      (@annotation = ep.annotations.create!(params.require(:annotation).permit(:user_id, :body, :time)))
      render :show
    else
      render json: {}, status: :unprocessable_entity
    end
  end

  def show
    @annotation = Annotation.find(params[:id])

    render :show
  end


  def index
    ep = Episode.find(params[:episode_id])
    @annotations = ep.annotations

    render :index
  end
end
