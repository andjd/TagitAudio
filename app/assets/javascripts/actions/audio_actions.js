(function(root) {
  'use strict';


  var TA = root.TA = root.TA || {};

  var Actions = TA.Actions = TA.Actions || {};

  Actions.Audio = {
    startPlayback: function(id) {
        TA.Dispatcher.dispatch ({
          actionType: TA.Constants.PLAYBACK_CHANGE,
          options: { playing: id }
        });
    },

    pausePlayback: function () {
      TA.Dispatcher.dispatch ({
        actionType: TA.Constants.PLAYBACK_CHANGE,
        options: { playing: -1 }
      });
    },

    updatePlaybackOptions: function(options) {
      TA.Dispatcher.dispatch({
        actionType: TA.Constants.PLAYBACK_CHANGE,
        options: options
      });
    }
  };

}(this));
