
(function(root) {
  'use strict';
  var TA = root.TA = root.TA || {};


  var Router = ReactRouter.Router;
  var Route = ReactRouter.Route;

  $(document).ready(function() {
    React.render(
      (
        <Router>
        <Route path="/" component={TA.EpisodePlayer} />,
        </Router>
      ),
      document.getElementById("react")
    );
  });
}(this));
