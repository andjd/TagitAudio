# Tagit dot Audio

[Heroku link][heroku]

[heroku]: tagit-audio.herokuapp.com

## Minimum Viable Product

Tagit dot Audio is a socail podcast annotation repository modeled after Sound Cloud.
It allows users to listen to podcasts and add comments, annotations, and tags at
specific points during the playback. Users can search fortags, and be pointed to
the specific part of a podcast that discusses the relevant topic.

Features:

<!-- This is a Markdown checklist. Use it to keep track of your progress! -->

- [ ] Users can Create an account, sign in, and sign out
- [X] It has a episode view that displays the podcast info
- [X] Users can play, pause, and seek within podcasts from the episode view
- [ ] The episode view shows stats such as number of plays and number of likes.
- [ ] Users can follow podcasts and like specific episodes of podcasts
- [X] Users can add annotations to specific timepoints of episodes
- [ ] Users can add tags to episodes by typing "#" in an annotation
- [ ] Users can search for podcasts by name, description, and tag
- [ ] Users can click on a tag in a comment to perform a search for that tag

## Design Docs
* [View Wireframes][view]
* [DB schema][schema]

[view]: ./docs/views.pdf
[schema]: ./docs/schema.md

## Implementation Timeline

### Phase 1:
####RSS parsing and server-side models for podcasts, episodes, annotations, and tags (1 day)

The first step will be creating Podcast and Episode models, and writing the
server-side utility function that will seed the database from a RSS feed.  I
will then create a JSON api to access these data.

* Status — Complete
* Notes — Podcast.digest_rss_feed can only accept properly formatted RSS feeds with iTunes tags.  Additional effort can make this method more robust.

[Details][phase-one]

### Phase 2:
####Build episode view and episode store in react (2 days)

This step involves creating the central view of the App.  Extra time is alloted
for getting the audio elements functioning.  Current goals are for the episode
view to display basic podcast info, playback controls, cover image, progress
bar/image.  Once a single instance of the episode view is functioning, the next
goal is to render a list of episode views to the page and make sure that only
one audio element is active at any given time.

* Status — Complete
* Notes — wavesurfer library did not work with podcasts.  Will have to write own function to get waveform bars.

[Details][phase-two]

### Phase 3:
####Annotations (2 days)

Add ability for users to add and view annotations directly in the episode view.  
add flux architecture to handle CRUD of comments, and flesh out server side code
to persist and serve annotations to/from the DB.  Tags will be generated on the
fly users typing "#". A user stub will be used in this phase.

* Status — Partially Complete — CRUD is rudimentary, TAGS not yet implemented.
* 

[Details][phase-three]

### Phase 4:
####Search (1.5 days)

Add search functionality with real-time results.  Seach will return results that
match podcast name or description, episode name or discription, and tags.  When
the hit is on a tag, the viewable comments will be filtered down to only the tags
that match the search.  Build in infinate scrolling of search results if time permits.

[Details][phase-four]

###
####Phase 5: Users and Authentication (1.5 day)

Build user model and use OmniAuth for authentication.  Build create account/login views.
Build front-and-backend so users can like episodes and follow podcasts. Allow users to edit and
delete their annotations.


[Details][phase-five]

###
####Phase 6: Visualizer & miselaneous polishing (1 day)

Modify podcast view to have animation that is repsonive to the audio, add polish
to rough elements.

### Bonus Features (TBD)
- [ ] add loading animation
- [ ] add podcast view
- [ ] add hosts and guests relation betwen users and episodes, give their annotations special styling
- [ ] add moderator user class with expanded privelages
- [ ] allow users to follow other users
- [ ] add star ratings
- [ ] add tag dictionary, and explain tags on hover
- [ ] add playback bar at bottom of page


[phase-one]: ./docs/phases/phase1.md
[phase-two]: ./docs/phases/phase2.md
[phase-three]: ./docs/phases/phase3.md
[phase-four]: ./docs/phases/phase4.md
[phase-five]: ./docs/phases/phase5.md
