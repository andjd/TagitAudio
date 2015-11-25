class Api::SessionsController < ApplicationController

  def show

    unless current_user
      render json: {}
      return
    end

    @user = current_user
    render "api/users/show"
  end

  def create
    user = User.find_by_creds(
      params[:username],
      params[:password]
    )

    if user.nil?
      render json: {messages: "invalid login"}, status: :unauthorized
    else
      login(user)
      @user = user
      render "api/users/show"
    end
  end

  def destroy
    logout
    render json: {}, status: :ok
  end
end
