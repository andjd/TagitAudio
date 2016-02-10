(function(root) {
  'use strict';
  var TA = root.TA = root.TA || {};


  var Link = ReactRouter.Link;


  TA.Nav = React.createClass({
    getInitialState: function () {
      return {active: this.props.active};
    },

    componentWillReceiveProps: function (newProps) {
      this.setState({active: newProps.active});
    },

    render: function () {
      return (
        <nav className="w">
          <ol className="nav group">
            <li className={(this.state.active === TA.Constants.NAV.NEW) ? "nav-el active" : "nav-el"}>
              <Link to={"/" + TA.Constants.NAV.NEW}>Newest</Link>
            </li>
            <li className={(this.state.active === TA.Constants.NAV.POPULAR) ? "nav-el active" : "nav-el"}>
              <Link to={"/" + TA.Constants.NAV.POPULAR}>Trending</Link>
            </li>
            <li className={(this.state.active === TA.Constants.NAV.FOLLOWING) ? "nav-el active" : "nav-el"}>
                <Link to={"/" + TA.Constants.NAV.FOLLOWING}>My Podcasts</Link>
            </li>
            <li className={(this.state.active === TA.Constants.NAV.SEARCH) ? "nav-el active" : "nav-el"}>
              <Link to={"/" + TA.Constants.NAV.SEARCH}>Search</Link>
            </li>
          </ol>
          <TA.AddPodcast  />
        </nav>
      );
    }
  });


}(this));
