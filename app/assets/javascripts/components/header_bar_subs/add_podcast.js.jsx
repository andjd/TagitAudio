(function(root) {
  'use strict';
  var TA = root.TA = root.TA || {};
  var page = 0

  TA.AddPodcast = React.createClass ({
  	render: function(){
  		return (<button onClick={TA.AjaxUtil.API.addPodcast}>+</button>)
  	}
  });

}(this));