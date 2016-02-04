class Trending < ActiveRecord::Base
  validates :podcast_id, :title, :feedjira_id, :episode_url, :description, :publication_date, :mime_type, presence: true

  validates :podcast, presence: true

  include PgSearch
  multisearchable against: [:title, :description]

  belongs_to :podcast

  has_many :annotations, foreign_key: :episode_id, dependent: :destroy
  has_many :annotators, through: :annotations, source: :annotator

  def annotations_in_order
    self.annotations.order(:time)
  end
end
