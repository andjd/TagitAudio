class User < ActiveRecord::Base

  attr_reader :password

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
    return nil unless user.hashword.is_password?(password)
    user
  end

  def hashword
    BCrypt::Password.new(super)
  end

  def reset_session
    self.token = SecureRandom.urlsafe_base64
    self.save
  end


end
