(function(root) {
  'use strict';
  var TA = root.TA = root.TA || {};

  TA.EpisodePlayer = React.createClass ({
    render: function () {
      ep = this.props.episode
      return (
        <article class="player">
          <TA.EpisodeImage episode={ep}/>
          <TA.PlayButton episode={ep} />
          <TA.EpisodeInfo episode={ep} />
          <TA.ProgressBar episode={ep} />
        </article>
      );
    },
  });
}(this));
