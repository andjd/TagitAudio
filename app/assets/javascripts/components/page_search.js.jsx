(function(root) {
  'use strict';
  var TA = root.TA = root.TA || {};
  TA.Pages = TA.Pages || {};

  TA.Pages.Search = React.createClass ({

    getInitialState: function (){
      return {episodes: [], search: "Search", intervalID: null};
    },

    componentDidMount: function () {
      TA.EpisodesStore.addListener(this.newEpisodes);
    },

    componentWillUnmount: function () {
      TA.EpisodesStore.rmListener(this.newEpisodes);
    },

    newEpisodes: function () {
      this.setState({episodes: TA.EpisodesStore.all()});
    },

    handleChange: function (e) {
      clearInterval(this.state.intervalID);
      var id;
      var searchTerms = e.currentTarget.value;
      var me = this;
      if (this.state.search.length > 2) {
        id = setInterval(TA.AjaxUtil.API.fetchEpisodes.bind(null,
                               TA.Constants.NAV.SEARCH,
                               function () {clearInterval(me.state.intervalID);},
                               searchTerms),
                          500);
      }
      this.setState({search: searchTerms, intervalID: id});
    },

    clearDefault: function () {
      if (this.state.search === "Search") {this.setState({search: "" });}
    },

    render: function () {
      return (
        <div className="search-wrapper">
          <input onFocus={this.clearDefault}
                 value={this.state.search}
                 onChange={this.handleChange}
                 className="search" />
          <div className="playerList w">
            { this.state.episodes.map(function (ep) {
              return (<TA.EpisodePlayer key={ep.episode_id }episode={ep} />);
              })
            }
          </div>
        </div>
      );
    }

  });

}(this));
