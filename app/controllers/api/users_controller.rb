class Api::UserController < ApplicationController

  def create
    @user = User.new(user_params)

    if @user.save
      render :show
    else
      render json: {}, status: :unprocessable_entity
    end

  end

  def availability
    if User.find_by_username(params[:username])
      render json: {messages: "username unavailable"}, status: :conflict
    else
      render json: {messages: "username available"}, status: :accepted
    end
  end

  private

  def user_params
    params.require(:user).permit(:username, :email, :avatar, :password)
  end
end
