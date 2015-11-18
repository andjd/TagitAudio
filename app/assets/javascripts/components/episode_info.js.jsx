(function(root) {
  'use strict';
  var TA = root.TA = root.TA || {};

  TA.EpisodeInfo = React.createClass ({
    render: function () {
      return (
        <header>
          <h3>{this.props.parent.props.episode.podcast.title}</h3>
          <h4>{this.props.parent.props.episode.title}</h4>
          <h5>{this.props.parent.props.episode.description}</h5>
        </header>
      );
    }
  });

}(this));
