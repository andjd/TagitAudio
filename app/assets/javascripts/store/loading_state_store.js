(function(root) {
  	'use strict';
  	var TA = root.TA = root.TA || {};

  	var loading = false;

  	var LOADING_UPDATE = "load?" 

	 TA.LoadingStateStore = $.extend({}, EventEmitter.prototype, {
	 	status: function () {
	 		return !!loading;
	 	},

	 	addListener: function(cb) {
	      		this.on(LOADING_UPDATE, cb);
	    	},

	    	rmListener: function(cb) {
	      		this.removeListener(LOADING_UPDATE, cb);
	    	},

	    	dispactherID: TA.Dispatcher.register(function (payload) {
	    		if (payload.actionType === TA.Constants.LOADING) {
	    			loading = payload.options.loading;
	    			TA.LoadingStateStore.emit(LOADING_UPDATE);
	    		}
	    	})
	 });


}(this));