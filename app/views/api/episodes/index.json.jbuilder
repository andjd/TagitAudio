json.array! @eps do |episode|
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
end
