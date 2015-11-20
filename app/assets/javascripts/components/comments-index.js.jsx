(function(root) {
  'use strict';
  var TA = root.TA = root.TA || {};

  TA.CommentsIndex = React.createClass ({
    getInitialState: function () {
      //fetch episode comments
    }
    render: function () {(
      <ol className="comments">
        {this.state.comments.map(function (el) {
          return(<TA.CommentMarker key=""
                                   episode={this.props.episode}
                                   comment={el} />);
        })}
      </ol>);
    }
  })

}(this));
