(function(root) {
  'use strict';
  var TA = root.TA = root.TA || {};


  TA.Constants = {
    PLAYBACK_CHANGE: "playback",
    EPISODES_RECD: "new episodes",
    ANNOTATIONS_RECD: "new annotations",
    AVATARS_RECD: "new meeples",
    LOADING: "loading",
    CURRENT_USER_RECD: "new user login",
    NEW_CURRENT_USER: "new session",
    SESSION_ENDED: "user logout",
    NAV: { NEW: "newest",
           FOLLOWING: "following",
           POPULAR: "trending",
           SEARCH: "search"
         }

    };



}(this));
