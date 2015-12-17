class Api::EpisodesController < ApplicationController
  def index
    @eps = Episode.includes(:podcast, :annotations).all
    render :index
  end

  def trending
    @eps = Episode.includes(:podcast, :annotations).find_by_sql(<<-SQL).first(7)
        SELECT episodes.*
        FROM episodes
        JOIN (
            SELECT
        	    e.id,
        	    COALESCE(SUM(1 / (1 + exp((
        	      DATE_PART('day', current_timestamp - a.created_at) * 24 +
        	      DATE_PART('hour', current_timestamp - a.created_at )
        	      ) - 40) / 8 )), 0) AS annotation_score
            FROM episodes AS e
            JOIN annotations AS a
              ON e.id = a.episode_id
            GROUP BY e.id
        ) AS score
        ON episodes.id = score.id
        ORDER BY score.annotation_score DESC , episodes.publication_date DESC

      SQL

    render :index
  end

  def newest
    @eps = Episode.includes(:podcast, :annotations).order(:publication_date).reverse_order.first(7)
    render :index
  end

  def following
    @user = User.find(params[:user])
    @eps = @user.episodes.includes(:podcast, :annotations).order(:publication_date).reverse_order.first(7)
    render :index
  end


  def show
    @eps = [Episode.includes(:podcast, :annotations).find(params[:id])]
    render :index
  end
end
