(function(root) {
  'use strict';
  var TA = root.TA = root.TA || {};

  TA.EpisodeInfo = React.createClass ({
      render: function() {
        return(<img src={this.props.episode.image_url} alt="" />);
      }

  });

}(this));
