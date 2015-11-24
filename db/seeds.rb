# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

Podcast.digest_rss_feed("http://flipthetable.libsyn.com/rss")
Podcast.digest_rss_feed("http://ludology.libsyn.com/rss")
Podcast.digest_rss_feed("http://breakingintoboardgames.libsyn.com/rss")
Podcast.digest_rss_feed("http://www.shutupandsitdown.com/podcast/feed.xml")
Podcast.digest_rss_feed("http://boardgamesinsider.com/feed/podcast/")

Episode.all.each do |ep|
  j = ep.id;

  num_ann = (rand * 12).to_i

  num_ann.times do |i|
      secs = rand * ep.duration
      ep.annotations.create!(user_id: (rand() * 8).to_i , time: secs, body: "this is test annotation # #{i}")
    end
end
