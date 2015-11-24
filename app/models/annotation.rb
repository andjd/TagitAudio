class Annotation < ActiveRecord::Base
  validates :body, :time, :user_id, :episode_id, presence: true


  belongs_to :episode
  has_one :podcast, through: :episode, source: :podcast
  
  include Comparable
  
  def <=> (other) 
    self.time <=> other.time
  end
    

end
