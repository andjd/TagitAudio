(function(root) {
  'use strict';
  var TA = root.TA = root.TA || {};

  TA.PlayButton = React.createClass ({
    render: function () {

      var playing = (this.props.parent.state.playing) ? "true" : "false"
      return(
        <button disabled={playing} onClick={TA.Actions.Audio.startPlayback(this.props.parent.props.episode.episode_id)}>
          Play
        </button>
      );
    }

  });

}(this));
