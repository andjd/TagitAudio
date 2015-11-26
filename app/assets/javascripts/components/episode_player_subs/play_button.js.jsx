(function(root) {
  'use strict';
  var TA = root.TA = root.TA || {};

  TA.PlayButton = React.createClass ({
    getInitialState: function () {
      return{hover: false};
    },

    handleClick: function () {
      if (this.props.playing) {
        TA.Actions.Audio.pausePlayback();
      } else {
        TA.Actions.Audio.startPlayback(this.props.episode.episode_id);
      }
    },

    handleEnter: function (e) {
      if (this.props.playing) {
        this.setState({hover: true});
      }
    },

    handleLeave: function (e) {
      this.setState({hover: false});
    },

    render: function () {

      return(
        <div className='controls group' onMouseLeave={this.handleLeave}>
          <button className={ (this.props.playing) ? "icon-big-pause" : "icon-big-play" }
                  onClick={this.handleClick}
                  onMouseEnter={this.handleEnter}>
          </button>
          {(true || this.props.playing && this.state.hover ) ? (
            <TA.Controls  episode={this.props.episode}
                        options={this.props.options}
                        callback={this.props.callback}
                          />
            ) : "" }
        </div>
      );
    }

  });

}(this));
