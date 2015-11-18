(function(root) {
  'use strict';
  var TA = root.TA = root.TA || {};

  TA.PlayButton = React.createClass ({
    render: function () {

      return(
        <button onClick={TA.Actions.Audio.startPlayback(this.props.episode.episode_id)} disabled = {this.props.playing} >
          Play
        </button>
      );
    }

  });

}(this));
