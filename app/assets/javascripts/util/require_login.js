(function(root) {
  'use strict';
  var TA = root.TA = root.TA || {};
  var LoginUtil = TA.LoginUtil = TA.LoginUtil || {};

    LoginUtil.userOrLogin = function() {
      var user = TA.CurrentUserStore.user();
      if (user !== null && user !== undefined) {return user;}
      else {TA.Actions.login.require();}
    };

  }(this));
