(function(root) {
  'use strict';
  var TA = root.TA = root.TA || {};
  TA.Pages = TA.pages || {};

  TA.Pages.Newest = React.createClass ({

    getInitialState: function (){
      return {episodes: []};
    },

    componentDidMount: function () {
      TA.AjaxUtil.API.fetchEpisodes(TA.Constants.NAV.NEW);
      TA.EpisodesStore.addListener(this.newEpisodes);
    },

    componentWillUnmount: function () {
      TA.EpisodesStore.rmListener(this.newEpisodes);
    },

    newEpisodes: function () {

      this.setState({episodes: TA.EpisodesStore.all()});
    },

    render: function () {
      return (
        <div className="playerList">
          { this.state.episodes.map(function (ep) {
            return (<TA.EpisodePlayer key={ep.episode_id }episode={ep} />);
            })
          }
        </div>
      );
    }

  });

}(this));
