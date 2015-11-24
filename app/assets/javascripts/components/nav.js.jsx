(function(root) {
  'use strict';
  var TA = root.TA = root.TA || {};

  var NEW = "new";
  var FOLLOWING = "my-podcasts";
  var POPULAR = "popular";
  var SEARCH = "search";

  var Link = ReactRouter.Link;


  TA.Nav = React.createClass({
    getInitialState: function () {
      return {active: NEW};
    },

    render: function () {
      return (
        <nav>
          <ol className="nav group">
            <li className={(this.state.active === NEW) ? "nav-el active" : "nav-el"}>
              <Link to={"/" + TA.Constants.NAV.NEW}>Newest</Link>
            </li>
            <li className={(this.state.active === POPULAR) ? "nav-el active" : "nav-el"}>
              <Link to={"/" + TA.Constants.NAV.POPULAR}>Trending</Link>
            </li>
            <li className={(this.state.active === FOLLOWING) ? "nav-el active" : "nav-el"}>
                <Link to={"/" + TA.Constants.NAV.FOLLOWING}>My Podcasts</Link>
            </li>
            <li className={(this.state.active === SEARCH) ? "nav-el active" : "nav-el"}>
              <Link to={"/" + TA.Constants.NAV.SEARCH}>Search</Link>
            </li>
          </ol>
        </nav>
      );
    }
  });


}(this));
