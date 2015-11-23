(function(root) {
  'use strict';
  var TA = root.TA = root.TA || {};


  TA.AnnotationsMaster = React.createClass({
    getInitialState: function () {
      return({activeAnnotation: null, tempAnnotation: null});
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

    render: function() {
      return (
        <div className="annotations">
          <TA.ProgressBar episode={this.props.episode} />
          <TA.AnnotationsIndex episode={this.props.episode}
                               setActive={this.setActiveAnnotation}
                               setTemp={this.setTempAnnotation}
                               voidTemp={this.voidTempAnnotation}
                               current={this.currentAnnotation()} />
          {(this.props.active) ? (
            <TA.AnnotationView episode={this.props.episode}
                               setActive={this.setActiveAnnotation}
                               setTemp={this.setTempAnnotation}
                               voidTemp={this.voidTempAnnotation}
                               current={this.currentAnnotation()} />
            ) : "" }
        </div>
          
      );
    }

  });



}(this));