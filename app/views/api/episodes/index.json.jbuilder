json.array! @eps do |episode|
  json.partial! "api/episodes/episode", episode: episode
end
