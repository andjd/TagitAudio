(function(root) {
  'use strict';
  var TA = root.TA = root.TA || {};

  TA.AddPodcast = React.createClass ({
    getInitialState: function() {
      return {modal: false};
    },
    avtivateNewPodcastModal: function() {
      this.setState({modal: true});
    },
    voidModal: function() {
      this.setState({modal: false});
    },
  	render: function(){
  		return (

          <div className="nav-btn-right">
            <button onClick={this.avtivateNewPodcastModal}>+</button>
          <TA.NewPodcastModal active={this.state.modal} voidModal={this.voidModal} />
          </div>

      );
  	}
  });

}(this));
