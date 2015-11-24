(function(root) {
  'use strict';
  var TA = root.TA = root.TA || {};
  var AjaxUtil = TA.AjaxUtil = TA.AjaxUtil || {};

  TA.AjaxUtil.API = {
    fetchEpisodes: function(mode) {
      $.ajax(("/api/episodes/" + mode), {
        method: "GET",
        success: function (data) {
          TA.Actions.API.recEpisodes(data);
        }
      });
    },

    createAnnotation: function(params) {
      $.ajax(("/api/episodes/" + params.episode_id + "/annotations" ), {
        method: "POST",
        data: {annotation: params},
        success: function (data) {
          TA.Actions.API.recEpisodes(data);
        },
        error: function (data) {
          alert("Annotation Write Fail: " + data );
        }
      });
    }

  };


}(this));
