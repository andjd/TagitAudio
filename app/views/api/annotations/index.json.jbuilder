json.array! @annotations do |ann|
  json.annotation_id ann.id
  json.body ann.body
  json.time ann.time
  json.episode_id ann.episode_id
  json.user do
    u = User.find(ann.user_id)
    json user_id ann.user_id
    json user_name u.name
    json user_avatar image_path u.avatar
  end
end
