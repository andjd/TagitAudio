(function(root) {
  'use strict';
  var TA = root.TA = root.TA || {};

  var episodes = [];

  var _resetEpisodes = function (eps) {
    episodes = eps;
  };

  var _insertEpisode = function (new_episode) {
    var e = episodes.map(function(old_episode){
      if (old_episode.episode_id === new_episode.episode_id) {
        return new_episode;
      } else{ return old_episode;}
    });
    episodes = e;
  };


  var EPISODES_UPDATE = "new episodes";
  var ANNOTATIONS_UPDATE = "new annotations";

  TA.EpisodesStore = $.extend({}, EventEmitter.prototype, {
    all: function () {
      return episodes.slice();
    },



    addListener: function(cb) {
      this.on(EPISODES_UPDATE, cb);
    },

    rmListener: function(cb) {
      this.removeListener(EPISODES_UPDATE, cb);
    },

    dispactherID: TA.Dispatcher.register(function (payload) {
      switch (payload.actionType) {
        case TA.Constants.EPISODES_RECD:
          _resetEpisodes(payload.episodes);
          TA.EpisodesStore.emit(EPISODES_UPDATE);
          break;
        case TA.Constants.EPISODE_UPDATE:

          _insertEpisode(payload.episode[0]);
          TA.EpisodesStore.emit(EPISODES_UPDATE);
          break;
      }
    })



  });


}(this));
