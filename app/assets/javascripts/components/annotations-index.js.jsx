(function(root) {
  'use strict';
  var TA = root.TA = root.TA || {};

  TA.AnnotationsIndex = React.createClass ({
    getInitialState: function () {
      return {annotations: TA.EpisodesStore.getAnnotations(this.props.episode.episode_id)};
    },

    newAnnotations: function () {
      this.setState({annotations: TA.EpisodesStore.getAnnotations(this.props.episode.episode_id)});
    },


    componentDidMount: function() {
      TA.AjaxUtil.API.fetchEpisodeAnnotations(this.props.episode.episode_id);
      TA.EpisodesStore.addAnnotationListener(this.newAnnotations);
    },

    render: function () {
        var ans = this.state.annotations;
        console.log(ans);
      return (
        <ol className="annotations">
          {ans && ans.map(function (el) {
            return(<span>{el.body}</span>);}
          )}
        </ol>
      );
    }

  });

}(this));

// <TA.AnnotationMarker key=""
//                          episode={this.props.episode}
//                          annotation={el} />);
