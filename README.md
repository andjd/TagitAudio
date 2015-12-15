# Tagit Audio

[Live][heroku]

[heroku]: www.tagit.audio

## About

Tagit Audio is an interactive website built with Postgres, Ruby on Rails, Javascript, React, Flux, and jQuery that allows users to listen to and tag podcasts in a social community. Its functionality and layout is loosely modeled after SoundCloud. It has a tagging functionality that allows users to mark specitifc points in an episode and add descriptions or comments that apply to that part of the audio.  Users can then search and find podcasts based on metadata and user tags, and clicking on a tag will seek directly to the related audio content.

Features:
- [X] Populates database by parsing Rich Site Summary XML feeds in Ruby using Feedjira
- [X] Builds a rich component built on top of the native HTML 5 AudioElement tailored to podcasts that:
  - displays podcast image and metadata
  - adds additional cotrolls in a pop-up tableau (inspired by tumblr):
    - seek forward or back 30 seconds
    - playback speed range slider stepped at increments of 0.25
    - volume range slider
    - mute
  - Custom logic loads audio files only when requested; each audio file is requested only once per session.
  - Uses Flux paradigm and a playback options store allowing multiple episode components to behave ideomatically (e.g. playing one episode pauses all others, volume adjstments are maintained, etc.)
- [X] Users can annotate (tag) podcasts and view others' tags.
  - tags with user avatar images are dynamically rendered in-line with the progress bar
  - playing an episode reveals an expanded view showing tag content
  - hovering over either a tag icon or tag body highlights the related componenet
- [X] Users can create accounts and log in.  
  - Passwords are protected using BCrypt.  
  - Validations on performed client side using javascript and AJAX

Features to Add
- [ ] clicking on a episode or podcast title will take user to episode/podcast views
- [ ] The episode view shows stats such as number of plays and number of likes.
- [ ] Users can follow podcasts and like specific episodes of podcasts
- [ ] Users will have a personalized "my podcasts" view
- [ ] Users can add keywords to tags by typing "#"
- [ ] Clicking on a keyword will perform a search for that keyword
- [ ] Search will use existing keywords for autocompete suggestions
- [ ] Allow users to add a podcast to the service
- [ ] Add loading animation
- [ ] Add hosts and guests relation and give their tags special styling
- [ ] Add moderator/reputation framework to weed out spam/low-value tags (similar to StackOverflow/Reddit)


* [DB schema][schema]

[schema]: ./docs/schema.md



