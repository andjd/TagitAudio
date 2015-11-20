class CreateAnnotations < ActiveRecord::Migration
  def change
    create_table :annotations do |t|
      t.integer :user_id, null: false
      t.integer :episode_id, null: false
      t.string :body, null: false
      t.integer :time, null: false

      t.timestamps null: false
    end
    add_index :annotations, :user_id
    add_index :annotations, :episode_id
  end
end
