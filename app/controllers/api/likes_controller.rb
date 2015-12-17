class Api::LikesController < ApplicationController
	def create
		@user = User.find(params[:user_id])
		@user.likes.create(episode_id: params[:episode])
		render "api/users/show"
	end

	def destroy
		@user = User.find(params[:user_id])
		Like.find_by_user_id_and_episode_id(@user.id, params[:episode]).destroy
		render "api/users/show"
	end

end