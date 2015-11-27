(function(root) {
  'use strict';
  var TA = root.TA = root.TA || {};

  TA.NewAnnotationForm = React.createClass({
      addAnnotation: function (e) {
          e.preventDefault;
          var form_params = {
              user_id: 1, /* update when making user model */
              episode_id: this.props.episode.episode_id,
              percentLocation: this.props.playbackPos,
              body: e.currentTarget.firstChild.lastChild.value
          };

          TA.AjaxUtil.API.createAnnotation(form_params);

      },

      render: function () {
          return (
              <form className="newAnnotation" onSubmit={this.addAnnotation}>
                <label> Your Annotation
                    <textarea />
                </label>
                <div className="new-ann-buttons">
                  <button onClick={this.cancel}>✘</button>
                  <button>✔︎</button>
                </div>
            </form>


              );
      }
  });


}(this));
