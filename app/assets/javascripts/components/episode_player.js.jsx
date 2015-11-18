(function(root) {
  'use strict';
  var TA = root.TA = root.TA || {};



  TA.EpisodePlayer = React.createClass ({
    getInitialState: function () {
      return { options: {} };
    },

    updatePlaybackOptions: function () {
      debugger
      this.setState({ options: TA.PlaybackOptionsStore.options() });
    },

    localUpdatePlaybackOptions: function (options) {
      debugger
      var new_options = $.extend({}, this.state.options);
      new_options[Object.keys(options)[0]] = options[Object.keys(options)[0]];
      this.setState(new_options);
      // TA.Actions.Audio.updatePlaybackOptions(options);
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
      return (
        <article className="player">
          <TA.EpisodeImage episode={this.props.episode} />
          <TA.PlayButton   episode={this.props.episode}
                           playing={currently_playing}/>
          <TA.EpisodeInfo  episode={this.props.episode} />
          <TA.Controls     episode={this.props.episode}
                           options={this.state.options}
                           callback={this.localUpdatePlaybackOptions} />
          <TA.ProgressBar  episode={this.props.episode}
                           options={this.state.options}
                           playing={currently_playing} />
        </article>
      );
    },
  });
}(this));
