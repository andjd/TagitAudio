class AddBackgroundColorToPodcasts < ActiveRecord::Migration
  def change
    add_column :podcasts, :background_color, :string
  end
end
