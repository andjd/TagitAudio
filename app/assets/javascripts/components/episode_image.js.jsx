(function(root) {
  'use strict';
  var TA = root.TA = root.TA || {};

  TA.EpisodeImage = React.createClass ({
      render: function() {
        return(<img src={this.props.parent.props.episode.podcast.image_url} alt="" />);
      }

  });

}(this));
