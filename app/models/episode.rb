class Episode < ActiveRecord::Base
  validates :podcast_id, :title, :feedjira_id, :episode_url, :description, :publication_date, :mime_type, presence: true

  validates :podcast, presence: true

  include PgSearch
  multisearchable against: [:title, :description]

  belongs_to :podcast

  has_many :annotations, dependent: :destroy
  has_many :annotators, through: :annotations, source: :annotator

  has_one :trending_score

  def annotations_in_order
    self.annotations.order(:time)
  end
end
