(function(root) {
  'use strict';
  var TA = root.TA = root.TA || {};



  TA.AudioElement = React.createClass({


    componentDidMount: function () {
      this.props.activateCallback();
      this.player = React.findDOMNode(this.refs.player);
      this.player.addEventListener('timeupdate', this.updatePlaybackPos);
      this.player.addEventListener('loadedmetadata', this.updateDuration);

      this.setPlayerSettings();
    },

    componentWillUnmount: function () {
      this.player.removeEventListener('timeupdate', this.updatePlaybackPos);
      this.player.removeEventListener('loadedmetadata', this.updateDuration);
    },

    updateDuration: function () {

      this.props.callback({duration: this.audioDuration()});
    },

    updatePlaybackPos: function () {

      this.props.callback( {playbackPos: this.playbackPos()} );
    },

    componentDidUpdate: function() {
      this.setPlayerSettings();
    },

    audioDuration: function () {
      return this.player.duration;
    },

    playbackPos: function () {
      return this.player.currentTime / this.audioDuration();
    },

    setPlayerSettings: function () {
      if (this.props.playing) {
        this.player.play();
      } else {
        this.player.pause();
      }

      this.player.playbackRate = this.props.options.playback_speed;
      this.player.volume = this.props.options.volume;
      this.player.muted = this.props.options.muted;

    },





    render: function () {
      return (
        <audio  ref="player" >

          <source src={this.props.episode.episode_url}
                  type={this.props.episode.mime_type} />
        </audio>
      );
    }
  });

}(this))
