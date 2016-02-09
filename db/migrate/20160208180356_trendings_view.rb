class TrendingsView < ActiveRecord::Migration
  def change
    create_view :trending_scores, <<-SQL, force: true
      SELECT
        e.id AS episode_id,
        COALESCE(SUM(1 / (1 + exp((
          DATE_PART('day', current_timestamp - a.created_at) * 24 +
          DATE_PART('hour', current_timestamp - a.created_at )
          ) - 40) / 8 )), 0) AS score
      FROM episodes AS e
      JOIN annotations AS a
        ON e.id = a.episode_id
      WHERE DATE_PART('day', current_timestamp - a.created_at) < 29  -- Ignores old activity.
      GROUP BY e.id
    SQL
  end
end
