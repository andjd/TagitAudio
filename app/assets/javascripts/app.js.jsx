
(function(root) {
  'use strict';
  var TA = root.TA = root.TA || {};


  var Router = ReactRouter.Router;
  var Route = ReactRouter.Route;


  var App = React.createClass({
    // getInitialState: function (){
    //   return {episodes: []};
    // },
    //
    // componentDidMount: function () {
    //   TA.AjaxUtil.API.fetchEpisodes();
    //   TA.EpisodesStore.addListener(this.newEpisodes);
    // },
    //
    // newEpisodes: function () {
    //
    //   this.setState({episodes: TA.EpisodesStore.all()});
    // },

    render: function () {
      return (
        <div className="window">
          <TA.HeaderBar />
          <TA.Nav />

          {this.props.children}

        </div>
      );
    }
  });

  $(document).ready(function() {
    
    React.render(
      (
        <Router>
          <Route path="/" component={App}>
            <Route path={"/" + TA.Constants.NAV.NEW} component={TA.Pages.Newest} />
            <Route path={"/" + TA.Constants.NAV.POPULAR} />
            <Route path={"/" + TA.Constants.NAV.FOLLOWING} />
            <Route path={"/" + TA.Constants.NAV.SEARCH} />
          </Route>
        </Router>
      ),
      document.getElementById("react")
    );
  });
}(this));
