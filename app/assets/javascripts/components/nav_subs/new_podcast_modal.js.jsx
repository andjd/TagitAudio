(function(root) {
  'use strict';
  var TA = root.TA = root.TA || {};

  TA.NewPodcastModal = React.createClass({
    mixins: [ReactRouter.History],
    getInitialState: function() {
      return {feed: ""};
    },

    handleType: function(e) {
      this.setState({feed: e.currentTarget.value});
    },

    handleAccepted: function() {
      this.props.accepted(this.state.feed);
    },

    handleExisting: function(data) {
      this.props.voidModal(null);
      this.history.pushState(null, ("/podcasts/"+ data.responseText));
    },

    submitPodcast: function(e) {
      e.preventDefault();
      TA.AjaxUtil.API.addPodcast(this.state.feed, this.handleExisting, this.handleAccepted, this.tryAgain); //Second callback redirect to existing podcast page
    },

    tryAgain: function() {
      this.setState({error: true});
    },

    enterOrEscape: function(e) {
      switch(e.charCode) {
      case 13:
        e.preventDefault();
        e.stopPropagation();
        this.submitPodcast();
        break;
      case 27:
        this.props.voidModal();
      }
    },

    render: function () {
      return (
        <div  className={(this.props.active) ? "modal active" : "modal"}>
          <div className="modal-scrim"
               onClick={this.props.voidModal} />
          <div className="modal-content" >
            <header className="top-bar modal-bar group">
              <h1 className="logo group">
                <span>Tagit</span>
                <span>AUDIO</span>
              </h1>
            </header>

            <form onSubmit={this.submitPodcast} onKeyPress={this.enterOrEscape}>
              {(this.state.error) ? <strong> Something went wrong.  :-(  Please try again. </strong> : ""}
              <label>Add a Podcast
                <input  type="url"
                        placeholder="RSS feed URI"
                        onChange={this.handleType} />
              </label>

              <div>
                <button onClick={this.props.voidModal} className="button-cancel" >Cancel</button>
                <button type="submit" disabled={(this.state.feed === "")}>Submit</button>
              </div>
            </form>


          </div>
        </div>
      );

    }

  });


}(this));
