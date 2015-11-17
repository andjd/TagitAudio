class AddColumnMimeTypeToEpisodes < ActiveRecord::Migration
  def change
    add_column :episodes, :mime_type, :string, null: false
  end
end
