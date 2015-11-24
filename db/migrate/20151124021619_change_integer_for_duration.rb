class ChangeIntegerForDuration < ActiveRecord::Migration
  def change
    change_column :episodes, :duration,  'integer USING CAST(duration AS integer)'
  end
end
