(function(root) {
  'use strict';
  var TA = root.TA = root.TA || {};
  var AjaxUtil = TA.AjaxUtil = TA.AjaxUtil || {};

  TA.AjaxUtil.API = {
    search: function(searchTerms, callback) {
      debugger
      $.ajax(("/api/search/"), {
        method: "GET",
        data: searchTerms,
        success: function (data) {
          TA.Actions.API.recEpisodes(data);
          },
        complete: function () {
          callback && callback();
        }


      });
    },

    fetchEpisodes: function(mode) {
      $.ajax(("/api/episodes/" + mode), {
        method: "GET",
        success: function (data) {
          TA.Actions.API.recEpisodes(data);
          },
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
          alert("Annotation Write Fail: ");
        }
      });
    },

    login: function (params, cb) {
      $.ajax("/api/session", {
        method: "POST",
        data: {user: params},
        success: function (data) {
          TA.Actions.API.recCurrentUser(data);
           cb && cb();
        }
      });
    },

    createUser: function (params, cb) {
      $.ajax("/api/users", {
        method: "POST",
        data: {user: params},
        success: function (data) {
          TA.Actions.API.recCurrentUser(data);
           cb && cb();
        }
      });
    },

    checkUsernameAvailability: function (username, successCB, errorCB) {
      $.ajax("/api/users/availability/" + username , {
        method: "GET",
        success: successCB,
        error: errorCB
      });
    },

    logout: function () {
      $.ajax("/api/session", {
        method: "DELETE",
        success: function () {
          TA.Actions.API.recCurrentUser({});
        }
      });
    }

  };


}(this));
