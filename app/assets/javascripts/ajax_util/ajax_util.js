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
    }
  };


}(this));
