
(function(root) {
  'use strict';
  var TA = root.TA = root.TA || {};


  var Router = ReactRouter.Router;
  var Route = ReactRouter.Route;
  var Redirect = ReactRouter.Redirect;
  var IndexRoute= ReactRouter.IndexRoute;


  var App = React.createClass({

      getInitialState: function () {
          return {loading: false};
      },

      onLoadingChange: function () {
          this.setState({loading: TA.LoadingStateStore.status()});
      },

      componentWillMount: function () {
          TA.LoadingStateStore.addListener(this.onLoadingChange)
      },

      componentWillUnmount: function () {
          TA.LoadingStateStore.rmListener(this.onLoadingChange)
      },

    render: function () {
      return (
        <div className="window">
        {(this.state.loading) ? <TA.LoadingModal /> : ""}
        <TA.HeaderBar />
        <TA.Nav active={this.props.location.pathname.substr(1)} />

          {this.props.children}

        </div>
      );
    }
  });

  $(document).ready(function() {
    React.render(
      (
        <Router>
          <Route component={App}>
            <Redirect from="/" to="/welcome" />
            <Route path={"/" + TA.Constants.NAV.NEW} component={TA.Pages.Newest} />
            <Route path={"/" + TA.Constants.NAV.POPULAR} component={TA.Pages.Trending} />
            <Route path={"/" + TA.Constants.NAV.FOLLOWING} component={TA.Pages.Mine} />
            <Route path={"/" + TA.Constants.NAV.SEARCH} component={TA.Pages.Search}/>
            <Route path="/test" component={TA.LoadingModal} />
          </Route>
          <Route path="/welcome" component={TA.Welcome} />
        </Router>
      ),
      document.getElementById("react")
    );
  });
}(this));
