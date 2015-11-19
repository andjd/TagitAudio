(function(root) {
  'use strict';
  var TA = root.TA = root.TA || {};

  TA.PlayButton = React.createClass ({
    handleClick: function () {
      if (this.props.playing) {
        TA.Actions.Audio.pausePlayback();
      } else {
        TA.Actions.Audio.startPlayback(this.props.episode.episode_id);
      }
    },

    handleHover: function () {
      if (this.props.playing) {
        TA.Actions.Audio.pausePlayback();
      }
    },

    render: function () {

      return(
        <div className='controls'>
          <button className="control-el play-button" onClick={this.handleClick}   onHover="handleHover">
            { (this.props.playing) ? "⨀" : "➤" }
          </button>
          {(this.props.playing) ? (
            <TA.Controls  episode={this.props.episode}
                        options={this.props.options}
                        callback={this.props.callback}
                          />
            ) : null }
        </div>
      );
    }

  });

}(this));
