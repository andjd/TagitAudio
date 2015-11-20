class Episode < ActiveRecord::Base
  validates :podcast_id, :title, :feedjira_id, :episode_url, :description, :publication_date, :mime_type, presence: true

  validates :podcast, presence: true

  belongs_to :podcast

  has_many :annotations
end
