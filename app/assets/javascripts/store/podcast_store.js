(function(root) {
  	'use strict';
  	var TA = root.TA = root.TA || {};

  	var _podcast = null;

  	var PODCAST_UPDATE = "got podcast";

	 TA.PodcastStore = $.extend({}, EventEmitter.prototype, {
	 	podcast: function () {
	 		return _podcast;
	 	},

	 	addListener: function(cb) {
      		this.on(PODCAST_UPDATE, cb);
    	},

    	rmListener: function(cb) {
      		this.removeListener(PODCAST_UPDATE, cb);
    	},

    	dispactherID: TA.Dispatcher.register(function (payload) {
    		if (payload.actionType === TA.Constants.PODCAST_RECD) {
    			_podcast = payload.podcast;
    			TA.PodcastStore.emit(PODCAST_UPDATE);
    		}
    	})
	 });


}(this));
