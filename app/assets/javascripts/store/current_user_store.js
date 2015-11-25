(function(root) {
  'use strict';
  var TA = root.TA = root.TA || {};

  var user = null;

  var reset_user =  function (new_user) {
    user = new_user;
  };

  var void_user = function () {
    user = null;
  };

  var SESSION_CHANGE = "session";

  TA.CurrentUserStore = $.extend({}, EventEmitter.prototype, {
    user: function () {
      if ($.isEmptyObject(user)) {return null;}
      else {return $.extend({}, user);}
    },

    addListener: function(cb) {
      this.on(SESSION_CHANGE, cb);
    },

    rmListener: function(cb) {
      this.removeListener(SESSION_CHANGE, cb);
    },

    dispactherID: TA.Dispatcher.register(function (payload) {
      switch (payload.actionType) {
        case TA.Constants.CURRENT_USER_RECD:
          reset_user(payload.user);
          break;

        case TA.Constants.SESSION_ENDED:
          voidUser();
          break;

      }
      TA.CurrentUserStore.emit(SESSION_CHANGE);
    })

  });



}(this));
