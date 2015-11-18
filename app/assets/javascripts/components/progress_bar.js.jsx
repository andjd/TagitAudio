//New Version: requires proxy-serving of audio assets.

/*(function(root) {
  'use strict';
  var TA = root.TA = root.TA || {};

  TA.ProgressBar = React.createClass ({
    audio: Object.create(WaveSurfer),


    componentDidMount: function () {
      var options = {
        container     : React.findDOMNode(this.refs.progbar),
        waveColor     : 'violet',
        progressColor : 'purple',
        cursorColor   : 'navy'
      };

      this.audio.init(options);
      this.audio.load('/api/episodes/' + this.props.episode.episode_id + '/audio');
    },




    render: function () {
      return (
        <div className="progress-bar" ref={"progbar"} />
      );
    }
  });

}(this));
*/

// Old Version

(function(root) {
  'use strict';
  var TA = root.TA = root.TA || {};



  TA.ProgressBar = React.createClass ({

    componentDidUpdate: function () {
      var player = React.findDOMNode(this.refs.player);

      if (this.props.playing) {
        player.play();
      } else {
        player.pause();
      }

      player.playbackRate = this.props.options.playback_speed;
      player.volume = this.props.options.volume;
      player.muted = this.props.options.muted;

    },





    render: function () {

      return (
        <audio controls="controls" ref="player">
          <source src={this.props.episode.episode_url}
                  type={this.props.episode.mime_type} />
        </audio>
      );
    }
  });

}(this));
