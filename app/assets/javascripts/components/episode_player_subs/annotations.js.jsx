(function(root) {
  'use strict';
  var TA = root.TA = root.TA || {};

  TA.Annotations = React.createClass ({
    getInitialState: function () {
      return ({activeAnnotation: null, tempAnnotation: null, form: false});
    },

    componentWillReceiveProps: function () {
      this.setActiveAnnotation();
    },

    setActiveAnnotation: function () {
      var out ;
      this.props.episode.annotations.forEach(function (el) {
        if ((el.time / this.props.duration) < this.props.playbackPos) {out = el.annotation_id;}
      }.bind(this));
      this.setState({activeAnnotation: out});
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
    
    showForm: function () {
      this.setState({form: true});
    },

    render: function () {
      var ans = this.props.episode.annotations;
      return (
        <div className="annotations">

          <ol className="annotation-markerbar">
            {ans && ans.map(function (el) {
            return( <TA.AnnotationMarker  key={el.annotation_id}
                                          episode={this.props.episode}
                                          annotation={el}
                                          duration={this.props.duration}
                                          playbackPos={this.props.playbackPos}
                                          setTemp={this.setTempAnnotation}
                                          voidTemp={this.voidTempAnnotation}
                                          current={this.currentAnnotation()}
                                          clickCallback={this.props.clickCallback}
                                          />
                  );
            }.bind(this))}
          </ol>
          <ol className="annotation-view">
            {(this.props.active) ?
              (ans && ans.map(function (el) {
                return( <TA.AnnotationView  key={el.annotation_id}
                                        episode={this.props.episode}
                                        annotation={el}
                                        setTemp={this.setTempAnnotation}
                                        voidTemp={this.voidTempAnnotation}
                                        current={this.currentAnnotation()}
                                        clickCallback={this.props.clickCallback}
                                        />
                        
                  );
            }.bind(this))
          ) : "" }
        </ol>
        <button className="button"
                onClick={this.showForm}
                >➕</button>
        {(this.state.form) ?
          <TA.NewAnnotationForm episode={this.props.episode}
                                playbackPos={this.props.playbackPos} /> : "" }
                                
      </div>
      );
    }

  });

}(this));
