json.array! @search_results.map(&:searchable) do |r|
  case
  when r.class == Episode
    json.partial! "api/episodes/episode", episode: r
    json._type "episode"
  when r.class == Podcast
    ep = r.episodes.order(:publication_date).reverse_order.first
    json.partial! "api/episodes/episode", episode: ep
    json._type "podcast"
  when r.class == Annotation
    ep = r.episode
    json.partial! "api/episodes/episode", episode: ep
    json.annotation r
    json._type "annotation"
  else
    next
  end
end
