(function(root) {
  'use strict';
  var TA = root.TA = root.TA || {};

  var _options = {
    playing: null,
    volume: 1,
    playback_speed: 1,
    muted: false
  };

  var updateOptions = function (options) {

    Object.keys(options).forEach(function (option){
      _options[option] = options[option];
    });
  };

  var OPTIONS_UPDATE = "options";

  TA.PlaybackOptionsStore = $.extend({}, EventEmitter.prototype, {
    options: function () {
      return $.extend({}, _options);
    },

    addListener: function(cb) {
      this.on(OPTIONS_UPDATE, cb);
    },

    rmListener: function(cb) {
      this.removeListener(OPTIONS_UPDATE, cb);
    },

    dispactherID: TA.Dispatcher.register(function (payload) {
      switch (payload.actionType) {
        case TA.Constants.PLAYBACK_CHANGE:
          updateOptions(payload.options);
          if (payload.options.playing) {
            TA.PlaybackOptionsStore.emit(OPTIONS_UPDATE);
          }
          break;

      }
    })

  });



}(this));
