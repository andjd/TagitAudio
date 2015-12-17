json.username @user.username
json.id @user.id
json.avatar image_path @user.avatar
json.likes @user.likes.map(&:episode_id)
json.follows @user.follows.map(&:podcast_id)
