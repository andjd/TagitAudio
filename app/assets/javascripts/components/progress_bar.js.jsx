//New Version: requires proxy-serving of audio assets.

/*(function(root) {
  'use strict';
  var TA = root.TA = root.TA || {};

  TA.ProgressBar = React.createClass ({
    audio: Object.create(WaveSurfer),


    componentDidMount: function () {
      var options = {
        container     : React.findDOMNode(this.refs.progbar),
        waveColor     : 'violet',
        progressColor : 'purple',
        cursorColor   : 'navy'
      };

      this.audio.init(options);
      this.audio.load('/api/episodes/' + this.props.episode.episode_id + '/audio');
    },




    render: function () {
      return (
        <div className="progress-bar" ref={"progbar"} />
      );
    }
  });

}(this));
*/

// Old Version

(function(root) {
  'use strict';
  var TA = root.TA = root.TA || {};

  TA.ProgressBar = React.createClass ({
    render: function () {
      return (
        <audio controls="controls">
          <source src={this.props.parent.props.episode.episode_url}
                  type={this.props.parent.props.episode.mime_type} />
        </audio>
      );
    }
  });

}(this));
