 class Api::UsersController < ApplicationController

  def create
    @user = User.new(user_params.merge(avatar: clean_avatar_url))

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

  def avatars
    @images = Dir["app/assets/images/meeples/*.jpg"]
  end


private
  def user_params
    params.require(:user).permit(:username, :email, :password)
  end


  def clean_avatar_url
    a = params[:user][:avatar].split("-")
    a.pop
    a.join("-").split("/")[-2..-1].join("/") + ".jpg"
  end
end
