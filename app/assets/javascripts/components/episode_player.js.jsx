(function(root) {
  'use strict';
  var TA = root.TA = root.TA || {};



  TA.EpisodePlayer = React.createClass ({
    getInitialState: function () {
      return { options: {} };
    },

    updatePlaybackOptions: function () {
      this.setState({ options: TA.PlaybackOptionsStore.options() });
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

      return (
        <article className="player">
          <TA.EpisodeImage parent={this} />
          <TA.PlayButton parent={this} />
          <TA.EpisodeInfo parent={this} />
          <TA.ProgressBar parent={this} />
        </article>
      );
    },
  });
}(this));
