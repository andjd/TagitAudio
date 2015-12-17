class Api::FollowsController < ApplicationController
		def create
		@user = User.find(params[:user_id])
		@user.follows.create(podcast_id: params[:podcast])
		render "api/users/show"
	end

	def destroy
		@user = User.find(params[:user_id])
		Follow.find_by_user_id_and_podcast_id(@user.id, params[:podcast]).destroy
		render "api/users/show"
	end
end