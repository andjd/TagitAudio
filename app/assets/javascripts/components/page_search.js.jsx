(function(root) {
  'use strict';
  var TA = root.TA = root.TA || {};
  TA.Pages = TA.Pages || {};

  TA.Pages.Search = React.createClass ({

     mixins: [ReactRouter.History],

    getInitialState: function (){
      return {episodes: [], search: "", intervalID: null, page: 1};
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
        id = setInterval(TA.AjaxUtil.API.search.bind(null,
                               searchTerms,
                               function () {clearInterval(me.state.intervalID);},
                               this.state.page),
                          500);
      }
      this.setState({search: searchTerms, intervalID: id, page: 1});
    },

    // extra credit: extract into own component
    getNextPage: function () {
      var nextPage = this.state.page += 1;
      TA.AjaxUtil.API.search(this.state.search, null, nextPage);
      this.setState({page: nextPage});
      // var w = React.findDOMNode("body")
      root.scroll(0, 0);
    },

    render: function () {
      return (
        <div className="search-wrapper w">
          <input placeholder="Try searching for 'batman'"
                 value={this.state.search}
                 onChange={this.handleChange}
                 className="search" />
          <div className="playerList w">
            { this.state.episodes.map(function (ep) {
              return (<TA.EpisodePlayer key={ep.episode_id }episode={ep} />);
              })
            }
          </div>
          {(this.state.episodes.length === 0) ? "" :
          <div className="pagination w">
            <button disabled={this.state.episodes.length !== 7}
                    className="nextpage"
                    onClick={this.getNextPage}>
              fetch more episodes</button>
          </div> }
        </div>
      );
    }

  });

}(this));
