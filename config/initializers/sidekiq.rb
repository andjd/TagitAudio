Sidekiq.configure_server do |config|
  config.redis = { url: 'redis://rediscloud:5tmfzsPUhsOcg0v5@pub-redis-16754.us-east-1-3.7.ec2.redislabs.com:16754' }
end

Sidekiq.configure_client do |config|
  config.redis = { url: 'redis://rediscloud:5tmfzsPUhsOcg0v5@pub-redis-16754.us-east-1-3.7.ec2.redislabs.com:16754' }
end
