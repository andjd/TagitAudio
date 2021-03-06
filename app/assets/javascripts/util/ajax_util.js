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

    fetchPodcastAndEpisodes: function(id) {
      var t = setTimeout(TA.Actions.Loading.start, 200);
      $.ajax(("api/podcasts/" + String(id)), {
        method: "GET",
        success: function (data) {
          TA.Actions.API.recPodcast(data);
          },
      });

      $.ajax(("/api/podcasts/" + String(id) + "/episodes"), {
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

    fetchEpisodes: function(mode) {
      var t = setTimeout(TA.Actions.Loading.start, 200);
      $.ajax(("/api/episodes/" + mode), {
        method: "GET",
        data: {user: TA.CurrentUserStore.user() && TA.CurrentUserStore.user().id},
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

    toggleLike: function(mode, params) {
      $.ajax(("/api/users/" + TA.CurrentUserStore.user().id + "/likes"), {
          method: (mode) ? "DELETE" : "POST",
          data: params,
          success: function(data) {
            TA.Actions.API.recCurrentUser(data);
          }
      } );
    },

    toggleFavorite: function(mode, params) {
      $.ajax(("/api/users/" + TA.CurrentUserStore.user().id + "/follows"), {
          method: (mode) ? "DELETE" : "POST",
          data: params,
          success: function(data) {
            TA.Actions.API.recCurrentUser(data);
          }
      } );
    },

    login: function (params, successCB, errorCB ){
      var t = setTimeout(TA.Actions.Loading.start, 250);
      $.ajax("/api/session", {
          method: "POST",
          data: {user: params},
          success: function (data) {
            TA.Actions.API.recCurrentUser(data);
            successCB && successCB()
          },
          error: function () {
            errorCB && errorCB();
          },
          complete: function () {
            clearTimeout(t);
            TA.Actions.Loading.clear();
          }
      });
    },

    createUser: function (params, successCB, errorCB) {
      $.ajax("/api/users", {
        method: "POST",
        data: {user: params},
        success: function (data) {
          TA.Actions.API.recCurrentUser(data);
           successCB && successCB();
        },
        error: errorCB
      });
    },

    checkUsernameAvailability: function (username, successCB, errorCB) {
      $.ajax("/api/users/availability/" + username , {
        method: "GET",
        success: successCB,
        error: errorCB
      });
    },

    addPodcast: function (url, existingCB, acceptedCB, errorCB) {
      $.ajax("/api/podcasts", {
        method: "POST",
        data: {podcast: {rss_url: url}},
        statusCode: {202: acceptedCB, 302: existingCB },
        error: errorCB
      });
    },

    checkPodcastStatus: function (url, foundCB, errorCB) {
      $.ajax("/api/podcasts/status", {
        method: "GET",
        data: {podcast: {rss_url: url}},
        statusCode: {302: foundCB, 422: errorCB}
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
