(function(root) {
  'use strict';
  var TA = root.TA = root.TA || {};

  TA.AnnotationMarker = React.createClass ({
    markerPosition: function () {
      return (this.props.annotation.time (this.props.episode.duration));
    },

    render: function () {
      return <div />;
    }
  });


}(this));
