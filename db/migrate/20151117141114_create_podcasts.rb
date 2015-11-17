class CreatePodcasts < ActiveRecord::Migration
  def change
    create_table :podcasts do |t|
      t.string :title, null: false
      t.string :description, null: false
      t.string :rss_url, null: false
      t.string :image_url

      t.timestamps null: false
    end
    add_index :podcasts, :title
    add_index :podcasts, :description
  end
end
