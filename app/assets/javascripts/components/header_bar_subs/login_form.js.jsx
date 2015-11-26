(function(root) {
  'use strict';
  var TA = root.TA = root.TA || {};

  TA.LoginForm = React.createClass ({
  getInitialState: function () {
    return({username: "username", password: "password"});
  },

  blankDefaults: function () {
    var u = (this.state.username === "username") ? "" : this.state.username;
    var p = (this.state.password === "password") ? "" : this.state.password;
    this.setState({username: u, password: p});
  },

  handleUsernameChange: function (e) {
    this.setState({username: e.currentTarget.value});
  },

  handlePasswordChange: function (e) {
    this.setState({password: e.currentTarget.value});
  },

  loginUser: function () {
    TA.AjaxUtil.API.login({username: this.state.username,
                           password: this.state.password},
                          this.props.voidModal);

  },

    render: function () {
      return(
        <form onSubmit={this.loginUser}>
          <label>Username
            <input  type="text"
                    value={this.state.username}
                    onFocus={this.blankDefaults}
                    onChange={this.handleUsernameChange} />
          </label>
          <label>Password
            <input  type="password"
                    value={this.state.password}
                    onFocus={this.blankDefaults}
                    onChange={this.handlePasswordChange} />
          </label>

          <div className="login-buttons">
            <button onClick={this.props.voidModal} className="button-cancel" >Cancel</button>
            <button>Log In</button>
          </div>
        </form>
      );
    }
  });

}(this));
