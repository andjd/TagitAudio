(function(root) {
  'use strict';
  var TA = root.TA = root.TA || {};
  TA.Pages = TA.Pages || {};

  TA.Pages.PlayerList = React.createClass ({

    getInitialState: function (){
      return {episodes: []};
    },

    componentDidMount: function () {
      TA.AjaxUtil.API.fetchEpisodes(this.props.params.view);
      TA.EpisodesStore.addListener(this.newEpisodes);
    },

    componentWillUnmount: function () {
      TA.EpisodesStore.rmListener(this.newEpisodes);
    },
    componentWillReceiveProps: function(newProps) {
      TA.AjaxUtil.API.fetchEpisodes(newProps.params.view);
    },

    newEpisodes: function () {

      this.setState({episodes: TA.EpisodesStore.all()});
    },

    render: function () {
      return (
        <div className="playerList w">
          { this.state.episodes.map(function (ep) {
            return (<TA.EpisodePlayer key={ep.episode_id }episode={ep} />);
            })
          }
        </div>
      );
    }

  });

}(this));
