(function(root) {
  'use strict';
  var TA = root.TA = root.TA || {};

  TA.AnnotationView = React.createClass ({
    setTemp: function () {
      this.props.setTemp(this.props.annotation.annotation_id);
    },

    voidTemp: function () {
      this.props.voidTemp();
    },

    seekToMe: function () {
      this.props.clickCallback(this.props.annotation.time);
    },

    render: function() {
      var current = (this.props.current === this.props.annotation.annotation_id);
      return (
        <p  className={(current) ?
              "annotation-body active" : "annotation-body"}
            onMouseEnter={this.setTemp}
            onMouseLeave={this.voidTemp}
            onClick={this.seekToMe} >

          {this.props.annotation.body}
        </p>
      );
    }

  });

}(this));
