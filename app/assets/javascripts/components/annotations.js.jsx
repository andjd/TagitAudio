(function(root) {
  'use strict';
  var TA = root.TA = root.TA || {};

  TA.Annotations = React.createClass ({
    getInitialState: function () {
      return ({annotations: TA.EpisodesStore.getAnnotations(this.props.episode.episode_id),
               activeAnnotation: null, 
               tempAnnotation: null
      });
    },

    newAnnotations: function () {
      this.setState({annotations: TA.EpisodesStore.getAnnotations(this.props.episode.episode_id)});
    },


    componentDidMount: function() {
      TA.AjaxUtil.API.fetchEpisodeAnnotations(this.props.episode.episode_id);
      TA.EpisodesStore.addAnnotationListener(this.newAnnotations);
    },
    
    setActiveAnnotation: function (val) {
        this.setState({activeAnnotation: val});
    },
    
    setTempAnnotation: function (val) {
        this.setState({tempAnnotation: val});
    },
    
    voidTempAnnotation: function () {
        this.setState({tempAnnotation: null});
    },
        
    currentAnnotation: function () {
        return (this.state.tempAnnotation === null) ? 
            this.state.activeAnnotation :
            this.state.tempAnnotation ;
    },

    render: function () {
      var ans = this.state.annotations;
      
      return (
        <div className="annotations">
          
          <ol className="annotation-markerbar">
            {ans && ans.map(function (el) {
            return( <TA.AnnotationMarker  key={el.annotation_id}
                                          episode={this.props.episode}
                                          annotation={el} 
                                          duration={this.props.duration}
                                          current={this.props.current} />
                  );
            }.bind(this))}
          </ol>
          <ol className="annotation-view">
            {ans && ans.map(function (el) {
            return( <TA.AnnotationView  key={el.annotation_id}
                                        episode={this.props.episode}
                                        annotation={el} 
                                        current={this.props.current} />
                  );
            }.bind(this))}
        </ol>
      </div>
      );
    }

  });

}(this));
