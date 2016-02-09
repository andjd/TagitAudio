class Api::EpisodesController < ApplicationController
  def index
    @eps = Episode.includes(:podcast, annotations: :annotator).all
    render :index
  end

  def trending
    @eps = Episode.joins(:trending_score)
      .includes(:podcast, annotations: :annotator)
      .order("trending_scores.score DESC, episodes.publication_date DESC")
      .first(7)
    render :index
  end

  def newest
    @eps = Episode.includes(:podcast, annotations: :annotator).order(:publication_date).reverse_order.first(7)
    render :index
  end

  def following
    @user = User.find(params[:user])
    @eps = @user.liked_episodes.includes(:podcast, annotations: :annotator).order(:publication_date).reverse_order.first(7)
    render :index
  end


  def show
    @eps = [Episode.includes(:podcast, annotations: :annotator).find(params[:id])]
    render :index
  end
end
