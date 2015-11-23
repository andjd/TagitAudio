json.array! @eps do |episode|
  json.episode_id episode.id
  json.title episode.title
  json.episode_url episode.episode_url
  json.description episode.description
  json.publication_date episode.publication_date
  json.mime_type episode.mime_type
  json.podcast do
    json.id episode.podcast_id
    json.title episode.podcast.title
    json.image_url episode.podcast.image_url
  end
  json.annotations do
    json.array! episode.annotations do |ann|
      json.annotation_id ann.id
      json.body ann.body
      json.time ann.time
      json.user_id ann.user_id
      # json.user_avatar_url ann.user.avatar_url
    end
  end
end
