(function(root) {
  'use strict';
  var TA = root.TA = root.TA || {};
  var dispatcherID

  TA.User = React.createClass({
    getInitialState: function () {
      return {user: TA.CurrentUserStore.user(), modal: null};
    },

    updateUser: function () {
      this.setState({user: TA.CurrentUserStore.user()});
    },


    componentWillUnmount: function () {
      TA.CurrentUserStore.rmListener(this.updateUser);
    },

    activateModalLogin: function (message) {
      this.setState({modal: "login", message: message});
    },

    activateModalCreate: function () {
      this.setState({modal: "create"});
    },

    voidModal: function () {
      this.setState({modal: null});
    },

    componentWillMount: function () {
      var me = this
      TA.CurrentUserStore.addListener(this.updateUser);
      dispatcherID = TA.Dispatcher.register(function (payload) {
        if (payload.actionType === TA.Constants.REQUIRE_LOGIN) {
          me.activateModalLogin(payload['message']);
        }
      })
    },

    render: function () {
        if (this.state.user) {
          return (<div className="user-status">
                    <span>{"Welcome, " + this.state.user.username}</span>
                    <img className="avatar-thumb" src={this.state.user.avatar} />
                    <button onClick={TA.AjaxUtil.API.logout}
                      >logout</button>
                  </div>);
        } else {
          return (<div className="login-buttons">
                    <span className="login-buttons">
                      <button className="login-login"
                            onClick={this.activateModalLogin}
                            >Log In</button>
                          <button className="login-create"
                            onClick={this.activateModalCreate}
                            >Create Account</button>
                    </span>
                    <TA.LoginModal
                        activeModal={this.state.modal}
                        voidModal={this.voidModal}
                        message={this.state.message}
                        activateModalLogin={this.activateModalLogin}
                        activateModalCreate={this.activateModalCreate} />
                  </div>);
          }

    }

  });

}(this));
