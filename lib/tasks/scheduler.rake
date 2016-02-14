desc "This task is called by the Heroku scheduler add-on"
task :update_podcasts => :environment do
  Podcast.update_episodes
end
