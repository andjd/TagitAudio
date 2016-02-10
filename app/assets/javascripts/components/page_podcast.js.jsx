(function(root) {
  'use strict';
  var TA = root.TA = root.TA || {};
  TA.Pages = TA.Pages || {};

  TA.Pages.Podcast = React.createClass ({

    getInitialState: function (){
      return {episodes: [], podcast: null};
    },

    componentDidMount: function () {
      TA.AjaxUtil.API.fetchPodcastAndEpisodes(this.props.params.splat);
      TA.EpisodesStore.addListener(this.newEpisodes);
      TA.PodcastStore.addListener(this.newPodcast);
    },

    componentWillUnmount: function () {
      TA.EpisodesStore.rmListener(this.newEpisodes);
      TA.PodcastStore.rmListener(this.newPodcast);
    },

    newEpisodes: function () {
      this.setState({episodes: TA.EpisodesStore.all()});
    },

    newPodcast: function () {
      this.setState({podcast: TA.PodcastStore.podcast()});
    },

    render: function () {
      return (
        <div className="playerList w">
          {(this.state.podcast) ? <TA.PodcastInfo podcast={this.state.podcast} /> : "" }
          { this.state.episodes.map(function (ep) {
            return (<TA.EpisodePlayer key={ep.episode_id } episode={ep} />);
            })
          }
        </div>
      );
    }

  });

}(this));
