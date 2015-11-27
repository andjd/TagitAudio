(function(root) {
  'use strict';
  var TA = root.TA = root.TA || {};

  TA.Annotations = React.createClass ({
    getInitialState: function () {
      return ({activeAnnotation: null, tempAnnotation: null, form: false, scrollHeight: 0});
    },

    // componentDidMount: function () {
    //   this.annotationBox = React.findDOMNode(this.refs.annobox);
    // },

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

    // componentDidUpdate: function () {
    //
    //   debugger
    //   this.annotationBox.scrollTo(40)
    //
    // },

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
          <div className={(this.props.active) ? "annotation-box active" : "annotation-box"}
              ref="annobox">
            {(this.props.active) ? (
              (this.state.form) ? (
                <div>
                  <button className="new-annotation-button" onClick={this.showForm}>✚</button>
                  <TA.NewAnnotationForm episode={this.props.episode}
                                    playbackPos={this.props.playbackPos} />
                </div>
              ):(
                <div>
                  <button className="new-annotation-button" onClick={this.showForm}>✚</button>
                  <ol>
                    {(ans && ans.map(function (el) {
                      return( <TA.AnnotationView
                              key={el.annotation_id}
                              episode={this.props.episode}
                              annotation={el}
                              setTemp={this.setTempAnnotation}
                              voidTemp={this.voidTempAnnotation}
                              current={this.currentAnnotation()}
                              clickCallback={this.props.clickCallback}
                              />

                          );
                      }.bind(this)))}
                  </ol>
                </div>
          )) : "" }
        </div>


      </div>
      );
    }

  });

}(this));
