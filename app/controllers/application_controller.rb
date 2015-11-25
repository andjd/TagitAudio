class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  helper_method :current_user

  def current_user
    return nil if self.session[:token].nil?
    return @current_user if @current_user
    @current_user = User.find_by_token(self.session[:token])
  end

  def logged_in?
    !!self.current_user
  end

  def login user
    @current_user = user
    @current_user.reset_session
    self.session[:token] = @current_user.token
  end

  def logout
    current_user.reset_session if current_user
    self.session[:token] = nil
  end
end
