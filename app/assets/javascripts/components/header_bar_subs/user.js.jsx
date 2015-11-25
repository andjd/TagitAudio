(function(root) {
  'use strict';
  var TA = root.TA = root.TA || {};

  TA.User = React.createClass({
    getInitialState: function () {
      return {user: TA.CurrentUserStore.user(), modal: null};
    },

    updateUser: function () {
      this.setState({user: TA.CurrentUserStore.user()});
    },

    componentWillMount: function () {
      TA.CurrentUserStore.addListener(this.updateUser);
    },

    componentWillUnmount: function () {
      TA.CurrentUserStore.rmListener(this.updateUser);
    },

    activateModalLogin: function (state) {
      this.setState({modal: "login"});
    },

    activateModalCreate: function (state) {
      this.setState({modal: "create"});
    },

    voidModal: function () {
      this.setState({modal: null});
    },





    render: function () {
        if (this.state.user) {
          return (<div className="userStatus">
                    <h6>{this.state.user.username}</h6>
                    <button onClick={TA.AjaxUtil.API.logout}
                      >logout</button>
                  </div>);
        } else {
          return (<div className="login-buttons">
                    <button className="login-login"
                            onClick={this.activateModalLogin}
                            >Log In</button>
                    <button className="login-create"
                            onClick={this.activateModalCreate}
                            >Create Account</button>
                    <TA.LoginModal
                        activeModal={this.state.modal}
                        voidModal={this.voidModal}
                        activateModalLogin={this.activateModalLogin}
                        activateModalCreate={this.activateModalCreate} />
                  </div>);
          }

    }

  });

}(this));
