json.episode_id episode.id
json.title episode.title
json.duration episode.duration
json.episode_url episode.episode_url
json.description strip_tags (episode.description.delete("\n").split("</p>").join("\n"))
json.publication_date episode.publication_date
json.mime_type episode.mime_type
json.background_color episode.podcast.background_color
json.podcast do
  json.id episode.podcast_id
  json.title episode.podcast.title
  json.image_url episode.podcast.image_url
end
json.annotations do
sorted_annotations = episode.annotations.sort
  json.array! sorted_annotations do |ann|
    json.annotation_id ann.id
    json.body ann.body
    json.time ann.time
    json.user_id ann.user_id
    json.user_avatar image_path ann.annotator.avatar
  end
end
