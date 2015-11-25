class CreateUsers < ActiveRecord::Migration
  def change
    execute "CREATE EXTENSION IF NOT EXISTS citext"

    create_table :users do |t|
      t.string :username, null: false
      t.citext :email
      t.string :hashword, null: false
      t.string :token, null: false

      t.timestamps null: false
    end
    add_index :users, :username
    add_index :users, :email, unique: true
    add_index :users, :hashword
    add_index :users, :token, unique: true
  end
end
