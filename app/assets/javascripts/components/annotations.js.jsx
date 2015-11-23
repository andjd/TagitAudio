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
    
    componentWillReceiveProps: function () {
      this.findActiveAnnotation();
    },
    
    findActiveAnnotation: function () {
      var out ;
      this.state.annotations.forEach(function (el) {
        if (el.time < this.props.playbackPos) {out = el.annotation_id}
      }.bind(this));
      return out;
    },

    newAnnotations: function () {
      var anns = TA.EpisodesStore.getAnnotations(this.props.episode.episode_id);
      var annsSorted = (anns) ? anns.sort(function (x, y) {
        return x.time - y.time;
      }) : null;
      
      this.setState({annotations: annsSorted});
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
                                          playbackPos={this.props.playbackPos}
                                          setActive={this.setActiveAnnotation}
                                          setTemp={this.setTempAnnotation}
                                          voidTemp={this.voidTempAnnotation} 
                                          current={this.currentAnnotation}
                                          />
                  );
            }.bind(this))}
          </ol>
          <ol className="annotation-view">
            {ans && ans.map(function (el) {
            return( <TA.AnnotationView  key={el.annotation_id}
                                        episode={this.props.episode}
                                        annotation={el} 
                                        setTemp={this.setTempAnnotation}
                                        voidTemp={this.voidTempAnnotation} 
                                        current={this.currentAnnotation} 
                                        />
                  );
            }.bind(this))}
        </ol>
      </div>
      );
    }

  });

}(this));
