class CreateEpisodes < ActiveRecord::Migration
  def change
    create_table :episodes do |t|
      t.integer :podcast_id, null: false
      t.string :title, null: false
      t.string :episode_url, null: false
      t.integer :duration, defalut: (15*60)
      t.string :description, null: false
      t.datetime :publication_date, null: false
      t.string :feedjira_id, null: false, index: true

      t.timestamps null: false
    end
    add_index :episodes, :podcast_id
    add_index :episodes, :title
    add_index :episodes, :description
    add_index :episodes, :publication_date
  end
end
