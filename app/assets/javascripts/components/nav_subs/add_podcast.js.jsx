(function(root) {
  'use strict';
  var TA = root.TA = root.TA || {};



  var i;

  var buttonText = {"add": "Add Podcast",
                    "queued": "Processing",
                    "available": "Go To Your Podcast",
                    "failed": "! Error"};

  TA.AddPodcast = React.createClass ({
    mixins: [ReactRouter.History],
    getInitialState: function() {
      return {modal: false, mode: "add", uri: null, podcastID: null};
    },

    handleClick: function() {
      switch (this.state.mode) {
      case "add":
        this.activateNewPodcastModal();
        break;
      case "queued":
        this.checkStatus();
        break;
      case "available":
        this.history.pushState(null, ('/podcasts/'+ this.state.podcastID));
        this.setState(this.getInitialState());
        break;
      case "failed":
        this.setState({mode: "add"});
      }
    },

    activateNewPodcastModal: function() {
      this.setState({modal: true});
    },
    accepted: function(uri) {
      i = setInterval(this.checkStatus, 20000);
      this.setState({modal: false, uri: uri, mode: "queued"});
    },
    
    voidModal: function() {
      this.setState(this.getInitialState())
    },

    checkStatus: function() {
      TA.AjaxUtil.API.checkPodcastStatus(this.state.uri,
          function(xhr){
            this.setState({podcastID: xhr.responseText, mode: "available"});
            clearInterval(i);
          }.bind(this),
          function(){
            this.setState({mode: "failed"});
            clearInterval(i);
          }.bind(this));
    },

  	render: function(){
  		return (

          <div className="nav-btn-right">
            <button className={'add-btn ' + this.state.mode} onClick={this.handleClick}>{buttonText[this.state.mode]}</button>
            <TA.NewPodcastModal active={this.state.modal} voidModal={this.voidModal} accepted={this.accepted} />
          </div>

      );
  	}
  });

}(this));
