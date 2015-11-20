(function(root) {
  'use strict';
  var TA = root.TA = root.TA || {};

  TA.AnnotationsIndex = React.createClass ({
    getInitialState: function () {
      //fetch episode annotations
    },
    render: function () {(
      <ol className="annotations">
        {this.state.annotations.map(function (el) {
          return(<TA.AnnotationMarker key=""
                                   episode={this.props.episode}
                                   annotation={el} />);
        })}
      </ol>);
    }
  })

}(this));
