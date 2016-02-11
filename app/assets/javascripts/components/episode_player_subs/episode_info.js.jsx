(function(root) {
  'use strict';
  var TA = root.TA = root.TA || {};
  var Link = ReactRouter.Link;

  TA.EpisodeInfo = React.createClass ({
    getInitialState: function () {
      return {user: TA.CurrentUserStore.user()};
    },

    updateUser: function () {
      this.setState(this.getInitialState());
    },

      componentDidMount: function () {
          TA.CurrentUserStore.addListener(this.updateUser);
      },

      componentWillUnmount: function () {
          TA.CurrentUserStore.rmListener(this.updateUser);
      },

  toggleFavorite: function(e) {
    e.preventDefault();
    var yes = TA.CurrentUserStore.following(this.props.episode.podcast.id);
    TA.AjaxUtil.API.toggleFavorite( yes, {podcast: this.props.episode.podcast.id});
  },

  toggleLike: function (e) {
    e.preventDefault();
    var yes = TA.CurrentUserStore.like(this.props.episode.episode_id);
    TA.AjaxUtil.API.toggleLike( yes, {episode: this.props.episode.episode_id});
  },

    render: function () {
      return (
        <header>
          <h3>
            <a onClick={this.toggleFavorite} className={"icon-mini-follow" + ((TA.CurrentUserStore.following(this.props.episode.podcast.id)) ? " awesome": "")} />
            <Link to={"/podcasts/" + this.props.episode.podcast.id}>{this.props.episode.podcast.title} </Link>
          </h3>
          <h4>
            <a onClick={this.toggleLike} className={"icon-mini-like" + ((TA.CurrentUserStore.like(this.props.episode.episode_id)) ? " awesome": "")} />
           {this.props.episode.title}
           </h4>
          <h5>{this.props.episode.description}</h5>
        </header>
      );
    }
  });

}(this));
