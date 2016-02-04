class Api::EpisodesController < ApplicationController
  def index
    @eps = Episode.includes(:podcast, annotations: :annotator).all
    render :index
  end

  def trending
    @eps = Episode.find_by_sql(<<-SQL)
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
            WHERE DATE_PART('day', current_timestamp - a.created_at) < 29  -- Ignores old activity.
            GROUP BY e.id
        ) AS score
        ON episodes.id = score.id
        ORDER BY score.annotation_score DESC , episodes.publication_date DESC
        LIMIT 7

      SQL

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
