(function(root) {
  'use strict';
  var TA = root.TA = root.TA || {};

  TA.PodcastInfo = React.createClass ({
      render: function() {
        return (
          <div className="w episode-info">
            <h1>{this.props.podcast.title}</h1>
            <h2>{this.props.podcast.description}</h2>
          </div>
        );
      }
    });


}(this));
