
(function(root) {
  'use strict';
  var TA = root.TA = root.TA || {};


  var Router = ReactRouter.Router;
  var Route = ReactRouter.Route;


  var App = React.createClass({




    render: function () {
      return (
        <div className="window">
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
          <Route path="/" component={App}>
            <Route path={"/" + TA.Constants.NAV.NEW} component={TA.Pages.Newest} />
            <Route path={"/" + TA.Constants.NAV.POPULAR} component={TA.Pages.Trending} />
            <Route path={"/" + TA.Constants.NAV.FOLLOWING} />
            <Route path={"/" + TA.Constants.NAV.SEARCH} component={TA.Pages.Search}/>
            <Route path="/test" component={TA.LoadingModal} />
          </Route>
          <Route path="/welcome" component={TA.Splash} />
        </Router>
      ),
      document.getElementById("react")
    );
  });
}(this));
