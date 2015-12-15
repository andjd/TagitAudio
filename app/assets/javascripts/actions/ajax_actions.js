(function(root) {
  'use strict';
  var TA = root.TA = root.TA || {};

  var Actions = TA.Actions = TA.Actions || {};

  Actions.API = {
    recEpisodes: function (data) {
      TA.Dispatcher.dispatch ({
        actionType: TA.Constants.EPISODES_RECD,
        episodes: data
      });
    },

    recCurrentUser: function (user) {
      TA.Dispatcher.dispatch ({
        actionType: TA.Constants.CURRENT_USER_RECD,
        user: user
      });
    },

    recAnnotations: function (stuff) {

      TA.Dispatcher.dispatch ({
        actionType: TA.Constants.ANNOTATIONS_RECD,
        episode_id: stuff.episode_id,
        annotations: stuff.data
      });
    },
    recAvatars: function (images) {
      TA.Dispatcher.dispatch({
        actionType: TA.Constants.AVATARS_RECD,
        avatars: images
      });
    }
  };

}(this));
