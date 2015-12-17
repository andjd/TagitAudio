class User < ActiveRecord::Base

  attr_reader :password

  has_many :likes
  has_many :episodes, through: :likes, source: :episode
  has_many :follows
  has_many :podcasts, through: :follows, source: :podcast

  validates :username, :hashword, :token, presence: true
  validates :username, :token, uniqueness: true
  validates :uid, uniqueness: {:scope => :provider, :allow_nil => true}
  # password quality enforced in front-end javascript

  before_validation on: :create do
    self.reset_session unless self.token
  end

  def password=(password)
    @password = password
    self.hashword = BCrypt::Password.create(password)
  end



  def self.find_by_creds (username, password)
    user = User.find_by_username(username)
    return nil unless user
    return nil unless BCrypt::Password.new(user.hashword).is_password?(password)
    user
  end

  def reset_session
    self.token = SecureRandom.urlsafe_base64
    self.save
  end


end
