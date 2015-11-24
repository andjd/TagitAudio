class Api::EpisodesController < ApplicationController
  def index
    @eps = Episode.includes(:podcast, :annotations).all
    render :index
  end

  def trending
    @eps = Episode.includes(:podcast, :annotations).all #find_by_sql(<<-SQL)
        #   SELECT *
        #   FROM episodes
        #
        #   SELECT
        #
        # SQL
    render :index
  end

  def newest
    @eps = Episode.includes(:podcast, :annotations).order(:publication_date).reverse_order.first(7)
    render :index
  end

  def following
    @eps = Episode.includes(:podcast, :annotations).all 
    # insert stuff here
    # .order(:publication_date).reverse_order.first(7)
    # all episodes of follwed podcasts, order by publication date
    render :index
  end

  def show
    @eps = [Episode.includes(:podcast, :annotations).find(params[:id])]
    render :index
  end
end
