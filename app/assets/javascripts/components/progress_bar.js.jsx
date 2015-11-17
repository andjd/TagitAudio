(function(root) {
  'use strict';
  var TA = root.TA = root.TA || {};

  TA.ProgressBar = React.createClass ({
    render: function () {
      return (
        <audio controls="controls">
          <source src={this.props.episode.episode_url}
                  type={this.props.episode.mime_type} />
        </audio>
      );
    }
  });

}(this));
