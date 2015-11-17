(function(root) {
  'use strict';
  var TA = root.TA = root.TA || {};

  TA.EpisodeImage = React.createClass ({
      render: function() {
        debugger
        return(<img src={this.props.episode.image_url} alt="" />);
      }

  });

}(this));
