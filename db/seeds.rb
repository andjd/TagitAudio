# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

Podcast.digest_rss_feed("http://www.macobserver.com/rss/dailyobservations_mp3.xml")
Podcast.digest_rss_feed("http://ludology.libsyn.com/rss")

first = Episode.first
10.times do |i|
    secs = i * 10 + 10
    first.annotations.create!(user_id: 1, time: secs, body: "this is test annotation # #{i}")
end
