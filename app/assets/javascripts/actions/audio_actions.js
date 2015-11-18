(function(root) {
  'use strict';


  var TA = root.TA = root.TA || {};

  var Actions = TA.Actions = TA.Actions || {};

  Actions.Audio = {
    startPlayback: function(id) {
      return function () {
        TA.Dispatcher.dispatch ({
          actionType: TA.Constants.PLAYBACK_CHANGE,
          payload: {options: { id: id }}
        });
      };
    }
  };

}(this));
