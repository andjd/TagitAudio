(function(root) {
  'use strict';
  var TA = root.TA = root.TA || {};



  TA.EpisodePlayer = React.createClass ({
    getInitialState: function () {

      return { options: {},
               playbackPos: 0,
               duration: this.props.episode.duration,
               activated: false,
               seek: null,
               lastPlaying: false};
    },




    updatePlaybackOptions: function () {
      var newOpts = TA.PlaybackOptionsStore.options();
      if (newOpts.playing === -1 &&
          this.state.options.playing === this.props.episode.episode_id){
          this.setState({lastPlaying: true, options: newOpts});
      } else {
          this.setState({lastPlaying: false, options: newOpts});
      }

    },

    audioStateUpdate: function (newState) {
      this.setState(newState);
    },

    activate: function () {
      this.setState({activated: true});
    },

    annotationClick: function (time) {
      this.setState({seek: time});
    },

    seekButtons: function (timeDiff) {
      this.setState({seek: this.state.playbackPos * this.state.duration + timeDiff});
    },

    clearSeek: function () {
      this.setState({seek: null});
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
      TA.PlaybackOptionsStore.rmListener(this.updatePlaybackOptions);
    },

    render: function () {
      var currently_playing = (this.state.options.playing === this.props.episode.episode_id);
      var active = (currently_playing || this.state.activated);

      var mostRecentActive = (active &&
                (!this.state.options.playing ||
                   currently_playing ||
                   this.state.lastPlaying
                 ));

      return (
        <article className="player group" style={{backgroundColor: this.props.episode.background_color}}>
          <div className="player-top" >
            <TA.PlayButton   episode={this.props.episode}
                             playing={currently_playing}
                             options={this.state.options}
                             seekCallback={this.seekButtons}
                             callback={this.localUpdatePlaybackOptions}/>
            <TA.EpisodeImage episode={this.props.episode} />
            <TA.EpisodeInfo  episode={this.props.episode} />
          </div>
          <div className="player-bottom">

            <TA.ProgressBar  playbackPos={this.state.playbackPos} />
            <TA.Annotations  episode={this.props.episode}
                             duration={this.state.duration}
                             playbackPos={this.state.playbackPos}
                             active={mostRecentActive}
                             clickCallback={this.annotationClick}/>
          </div>


          {(active) ? (
            <TA.AudioElement episode={this.props.episode}
                             options={this.state.options}
                             playing={currently_playing}
                             callback={this.audioStateUpdate}
                             activateCallback={this.activate}
                             seekPosition={this.state.seek}
                             seekCallback={this.clearSeek}
                             />
            ) : "" }
        </article>
      );
    },
  });
}(this));
