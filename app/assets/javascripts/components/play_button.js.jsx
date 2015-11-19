(function(root) {
  'use strict';
  var TA = root.TA = root.TA || {};

  TA.PlayButton = React.createClass ({
    handleClick: function () {
      if (this.props.playing) {
        TA.Actions.Audio.pausePlayback();
      } else {
        TA.Actions.Audio.startPlayback(this.props.episode.episode_id);
      }
    },

    render: function () {

      return(
        <button onClick={this.handleClick}>
          { (this.props.playing) ? "Pause" : "Play" }
        </button>
      );
    }

  });

}(this));
