(function(root) {
  'use strict';


  var TA = root.TA = root.TA || {};

  var Actions = TA.Actions = TA.Actions || {};

  Actions.login = {
    require: function() {
        TA.Dispatcher.dispatch ({
          actionType: TA.Constants.REQUIRE_LOGIN,
          message: "Please login to use this feature"
        });
    },
  };

}(this));
