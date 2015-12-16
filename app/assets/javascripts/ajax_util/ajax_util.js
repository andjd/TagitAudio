(function(root) {
  'use strict';
  var TA = root.TA = root.TA || {};
  var AjaxUtil = TA.AjaxUtil = TA.AjaxUtil || {};

  TA.AjaxUtil.API = {
    search: function(searchTerms, callback, page) {
      $.ajax(("/api/search/"), {
        method: "GET",
        data: {terms: searchTerms, page: page},
        success: function (data) {
          TA.Actions.API.recEpisodes(data);
          },
        complete: function () {
          callback && callback();
        }

      });
    },

    fetchEpisodes: function(mode) {
      var t = setTimeout(TA.Actions.Loading.start, 125);
      $.ajax(("/api/episodes/" + mode), {
        method: "GET",
        success: function (data) {
          TA.Actions.API.recEpisodes(data);
          },
        complete: function (){
          clearTimeout(t);
          TA.Actions.Loading.clear();
        }
      });
    },

    fetchAvatars: function(){
      $.ajax(("/api/users/avatars"), {
        method: "GET",
        success: function (data) {
          TA.Actions.API.recAvatars(data);
        },
      });
    },

    createAnnotation: function(params) {
      $.ajax(("/api/episodes/" + params.episode_id + "/annotations" ), {
        method: "POST",
        data: {annotation: params},
        success: function (data) {
          TA.Actions.API.updateEpisodes(data);
        },

        error: function (data) {
          // Handle Error
        }
      });
    },

    login: function (params, cb) {
      var t = setTimeout(TA.Actions.Loading.start, 250);
      $.ajax("/api/session", {
          method: "POST",
          data: {user: params},
          success: function (data) {
            TA.Actions.API.recCurrentUser(data);
          },
          complete: function () {
            cb && cb();
            clearTimeout(t)
            TA.Actions.Loading.clear();
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
