(function(root) {
  'use strict';
  var TA = root.TA = root.TA || {};


  TA.ProgressBar = React.createClass({

    render: function() {
      return (
        <div className="progress-bar" >
          <div style={{width: String(this.props.playbackPos * 100) + '%'}}/>
        </div>

      );
    }

  });



}(this));
