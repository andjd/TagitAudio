# Phase 5: Users and Authentication

## Rails
### Models
* User
* episode_likes
* podcast_follows

### Controllers
* users (create)
* session (create, destroy) 
* episode_likes(create, destroy)
* podcast_follows (create, destroy)
* episodes (favorites_index)

### Views

## Flux
### Views (React Components)
* create account
* log in
* like, favorite (button toggles in episode views)
* My podcasts view 

### Stores


### Actions
* login user
* confirm Favorited
* confirm Liked

### ApiUtil
* ApiUtil.toggleLike
* ApiUtil.toggleFavorite
* ApiUtil.createAccount
* ApiUtil.loginUser
* ApiUtil.logoutUser

## Gems/Libraries
* Bcrypt
* OmniAuth