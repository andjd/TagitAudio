(function(root) {
  'use strict';
  var TA = root.TA = root.TA || {};
  

  TA.AnnotationMarker = React.createClass ({
    getInitialState: function () {
      return {position: this.markerPosition()};
    },
    
    componentWillReceiveProps: function () {
      this.setState({position: this.markerPosition()});
    },
    
    
    markerPosition: function () {
      return (this.props.annotation.time / (this.props.duration));
    },

    render: function () {
      var style = {left: ((this.state.position * 100).toString() + "%"),
                  // update to reflect user's avatar
                  backgroundImage: "url(https://mysticmeeple.files.wordpress.com/2015/05/meeple.png?w=300" };

      return <div style={style} 
                  data-position={this.state.position}
                  className="annotation-marker"
                  />;
    }
  });


}(this));
