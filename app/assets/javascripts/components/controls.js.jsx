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
        <button onClick={this.muteToggle} >{(this.state.muted) ? "unmute" : "mute"}</button>
        <label>playback speed
          <input type='number' max="2" min="0.25" onChange={this.speedUpdate} />
        </label>
        <label> volume
          <input type="number" max="1" min="0" onChange={this.volumeUpdate} />
        </label>
      </span>);
    }
  });

}(this));
