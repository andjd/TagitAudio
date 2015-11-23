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

    setTemp: function () {
      this.props.setTemp(this.props.annotation.annotation_id);
    },

    voidTemp: function () {
      this.props.voidTemp();
    },

    seekToMe: function () {
      this.props.clickCallback(this.props.annotation.time);
    },



    render: function () {
      var current = (this.props.current === this.props.annotation.annotation_id);
      var style = {
                    left: ((this.state.position * 100).toString() + "%"),
                  };
      return <div style={style}
                  data-position={this.state.position}
                  className={(current) ? "annotation-marker active" : "annotation-marker"}
                  onMouseEnter={this.setTemp}
                  onMouseLeave={this.voidTemp}
                  onClick={this.seekToMe}
                  >
               <img src="https://mysticmeeple.files.wordpress.com/2015/05/meeple.png?w=300" alt="marker" />
             </div>;
    }
  });


}(this));
