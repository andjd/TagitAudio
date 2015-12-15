(function(root) {
  	'use strict';
  	var TA = root.TA = root.TA || {};

  	var avatars = [];

  	var AVATAR_UPDATE = "meeples!" 

	 TA.AvatarStore = $.extend({}, EventEmitter.prototype, {
	 	all: function () {
	 		return avatars.slice();
	 	},

	 	addListener: function(cb) {
	      		this.on(AVATAR_UPDATE, cb);
	    	},

	    	rmListener: function(cb) {
	      		this.removeListener(AVATAR_UPDATE, cb);
	    	},

	    	dispactherID: TA.Dispatcher.register(function (payload) {
	    		if (payload.actionType === TA.Constants.AVATARS_RECD) {
	    			avatars = payload.avatars;
	    			TA.AvatarStore.emit(AVATAR_UPDATE);
	    		}
	    	})
	 });


}(this));