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

    // componentWillReceiveProps: function () {
    //   this.active = React.findDOMNode(this.refs.active);
    //
    // },

    render: function() {
      var current = (this.props.current === this.props.annotation.annotation_id);
      return (
        <p  className={(current) ?
              "annotation-body active" : "annotation-body"}
            ref={(current) ? "active" : "_" }
            onMouseEnter={this.setTemp}
            onMouseLeave={this.voidTemp}
            onClick={this.seekToMe} >

          {this.props.annotation.body}
        </p>
      );
    }

  });

}(this));
