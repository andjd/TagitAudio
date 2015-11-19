(function(root) {
  'use strict';
  var TA = root.TA = root.TA || {};

  TA.Controls = React.createClass ({
    getInitialState: function () {
      return this.props.options;
    },

    componentWillReceiveProps: function(newProps) {
      this.setState(newProps.options);
    },

    muteToggle: function (e) {

      e.preventDefault();
      this.props.callback({muted: !this.props.options.muted});
    },

    speedUpdate: function (e) {

      e.preventDefault();
      this.props.callback({playback_speed: parseFloat(e.currentTarget.value)});
    },

    volumeUpdate: function (e) {
      e.preventDefault();
      this.props.callback({volume: parseFloat(e.currentTarget.value)});
    },

    render: function () {
      return(<span>
        <button className="control-el" onClick={this.muteToggle} >{(this.state.muted) ? "🔈" : "🔇"}</button>
        <label className="control-el" >🚀
          <input className="slider" type='range' max="2" min="0.5" step="0.25" value={this.state.playback_speed} onChange={this.speedUpdate} />
        </label>
        <label className="control-el" >📶
          <input className="slider" type="range" max="1" min="0" step="0.01"value={this.state.volume}  onChange={this.volumeUpdate} />
        </label>
      </span>);
    }
  });

}(this));
