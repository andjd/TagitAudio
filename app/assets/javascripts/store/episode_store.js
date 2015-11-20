(function(root) {
  'use strict';
  var TA = root.TA = root.TA || {};

  var episodes = [];

  var _resetEpisodes = function (eps) {
    episodes = eps;
  };

  var _addAnnotationsToEpisode = function (epId, annotations) {
    ep = episodes.find(function (e) {return (e.id === epId);});
    var a = ep.annotations = ep.annotations || [];
    
    a = a.concat(annotations.filter(function (ann) {
      return(a.indexOf(ann) === -1);
    }));
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

        case TA.Constants.ANNOTATIONS_RECD:
          _addAnnotationsToEpisode(payload.episode_id, payload.annotataions);
          TA.EpisodesStore.emit(ANNOTATIONS_UPDATE);
          break;
      }
    })



  });


}(this));
