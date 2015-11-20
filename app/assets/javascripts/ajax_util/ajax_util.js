(function(root) {
  'use strict';
  var TA = root.TA = root.TA || {};
  var AjaxUtil = TA.AjaxUtil = TA.AjaxUtil || {};

  TA.AjaxUtil.API = {
    fetchEpisodes: function() {
      $.ajax("/api/episodes", {
        method: "GET",
        success: function (data) {
          TA.Actions.API.recEpisodes(data);
        }
      });
    },
    fetchEpisodeAnnotations: function (episode_id) {
      $.ajax('/api/episodes/' + episode_id +'/annotations', {
        method: "GET",
        success: function (data) {
          TA.Actions.API.recAnnotations ({
            episode_id: episode_id,
            data: data
          });
        }
      });
    }
  };


}(this));
