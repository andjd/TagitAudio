# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

Podcast.digest_rss_feed("http://www.macobserver.com/rss/dailyobservations_mp3.xml")
Podcast.digest_rss_feed("http://ludology.libsyn.com/rss")
