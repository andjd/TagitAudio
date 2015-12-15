(function(root) {
  'use strict';
  var TA = root.TA = root.TA || {};

   var Actions = TA.Actions = TA.Actions || {};

   Actions.Loading = {
   	start: function() {

   		TA.Dispatcher.dispatch ({
          		actionType: TA.Constants.LOADING,
          		options: { loading: true }
        });
   	},
   	clear: function() {
   		TA.Dispatcher.dispatch ({
          		actionType: TA.Constants.LOADING,
          		options: { loading: false }
        });
   	},

   }


}(this));
