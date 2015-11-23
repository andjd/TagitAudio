(function(root) {
  'use strict';
  var TA = root.TA = root.TA || {};



  TA.EpisodePlayer = React.createClass ({
    getInitialState: function () {
      return { options: {}, playbackPos: 0, duration: NaN , activated: false};
    },

    updatePlaybackOptions: function () {
      this.setState({ options: TA.PlaybackOptionsStore.options() });
    },

    audioStateUpdate: function (newState) {
      this.setState(newState);
    },
    
    activate: function () {
      this.setState({activated: true});
    },


    localUpdatePlaybackOptions: function (options) {

      var newOptions = $.extend({}, this.state.options);
      var key = Object.keys(options)[0];
      newOptions[key] = options[key];
      this.setState({options: newOptions});
      TA.Actions.Audio.updatePlaybackOptions(options);
    },

    componentWillMount: function () {
      this.updatePlaybackOptions();
      TA.PlaybackOptionsStore.addListener(this.updatePlaybackOptions);
    },

    componentWillUnmount: function () {
      this.setState({options: {playing: null}});
      TA.PlaybackOptionsStore.reListener(this.updatePlaybackOptions);
    },

    render: function () {
      var currently_playing = (this.state.options.playing === this.props.episode.episode_id);
      var active = (currently_playing || this.state.activated)
      return (
        <article className="player container">
          <div className="player-top">
            <TA.EpisodeImage episode={this.props.episode} />
            <TA.PlayButton   episode={this.props.episode}
                             playing={currently_playing}
                             options={this.state.options}
                             callback={this.localUpdatePlaybackOptions}/>
            <TA.EpisodeInfo  episode={this.props.episode} />
          </div>
          <div className="player-bottom">
            <TA.ProgressBar  episode={this.props.episode} />
            <TA.Annotations  episode={this.props.episode}
                             duration={this.state.duration}
                             playbackPos={this.state.playbackPos}
                             active={active} />
          </div>


          {(active) ? (
            <TA.AudioElement episode={this.props.episode}
                             options={this.state.options}
                             playing={currently_playing}
                             callback={this.audioStateUpdate}
                             activateCallback={this.activate}
                             />
            ) : "" }
        </article>
      );
    },
  });
}(this));
