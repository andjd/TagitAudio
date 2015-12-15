class Annotation < ActiveRecord::Base
  validates :body, :time, :user_id, :episode_id, presence: true

  include PgSearch
  multisearchable against: [:body]


  belongs_to :episode
  has_one :podcast, through: :episode, source: :podcast

  belongs_to :user

  include Comparable

  def <=> (other)
    self.time <=> other.time
  end


end
