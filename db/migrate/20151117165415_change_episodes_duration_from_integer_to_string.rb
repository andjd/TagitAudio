class ChangeEpisodesDurationFromIntegerToString < ActiveRecord::Migration
  def change
    change_column(:episodes, :duration, :string)
  end
end
