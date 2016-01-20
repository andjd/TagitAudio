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
Podcast.digest_rss_feed("http://onboardgames.libsyn.com/rss")
Podcast.digest_rss_feed("http://cdn.thesecretcabal.com/scpodcast.xml")
Podcast.digest_rss_feed("http://thepartygamecast.libsyn.com/rss")
# Podcast.digest_rss_feed("http://feeds.feedburner.com/BluePegPinkPeg")
Podcast.digest_rss_feed("http://www.buzzsprout.com/20526.rss")
Podcast.digest_rss_feed("http://bgpov.com/feed/podcast/")
Podcast.digest_rss_feed("http://www.npr.org/templates/rss/podcast.php?id=344098539")


Episode.all.each do |ep|

  num_ann = (rand * 12).to_i

  num_ann.times do |i|
      secs = rand * ep.duration
      ep.annotations.create!(user_id: (rand() * 10).to_i + 1, time: secs, body: "this is test annotation # #{i}")
    end
end

User.new(username: "AlienBot", password: "password", avatar: "meeples/"+"Alien-130.jpg").save
User.new(username: "AngleBot", password: "password", avatar: "meeples/"+"Angel-130.jpg").save
User.new(username: "RobotBot", password: "password", avatar: "meeples/"+"Robot-130.jpg").save
User.new(username: "DispatcherBot", password: "password", avatar: "meeples/"+"Dispatcher-130.jpg").save
User.new(username: "CthulhuBot", password: "password", avatar: "meeples/"+"Cthulhu-130.jpg").save
User.new(username: "DragonBot", password: "password", avatar: "meeples/"+"Dragon-130.jpg").save
User.new(username: "GeekBot", password: "password", avatar: "meeples/"+"BGGErnie-130.jpg").save
User.new(username: "FarmerBot", password: "password", avatar: "meeples/"+"BrownFarmerMom-130.jpg").save
User.new(username: "FrogBot", password: "password", avatar: "meeples/"+"Frog-130.jpg").save
User.new(username: "TotoroBot", password: "password", avatar: "meeples/"+"Totoro-130.jpg").save
