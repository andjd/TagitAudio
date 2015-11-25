(function(root) {
  'use strict';
  var TA = root.TA = root.TA || {};

  TA.CreateAccountForm = React.createClass ({

  getInitialState: function () {
    return({username: "username", email: "you@example.ninja", password: "password", password2: "password" });
  },

  blankDefaults: function () {
    var u = (this.state.username === "username") ? "" : this.state.username;
    var e = (this.state.email === "you@example.ninja") ? "" : this.state.email;
    var p1 = (this.state.password === "password") ? "" : this.state.password;
    var p2 =(this.state.password2 === "password") ? "" : this.state.password2;
    this.setState({username: u, email: e, password: p1, password2: p2});
  },

  handleUsernameChange: function (e) {
    this.setState({username: e.currentTarget.value});
  },

  handlepasswordChange: function (e) {
    this.setState({password: e.currentTarget.value});
  },

  handlePassword2Change: function (e) {
    this.setState({password2: e.currentTarget.value});
  },

  handleEmailChange: function (e) {
    this.setState({email: e.currentTarget.value});
  },

  createUser: function () {
    TA.AjaxUtil.API.createUser(this.state,
                          this.props.voidModal);

  },

    render: function () {
      return(
        <form onSubmit={this.createUser}>
          <label>Username
            <input  type="text"
                    value={this.state.username}
                    onFocus={this.blankDefaults}
                    onChange={this.handleUsernameChange} />
          </label>
          <label>Email
            <input  type="email"
                    value={this.state.email}
                    onFocus={this.blankDefaults}
                    onChange={this.handleEmailChange} />
          </label>
          <label>Password
            <input  type="password"
                    value={this.state.password}
                    onFocus={this.blankDefaults}
                    onChange={this.handlepasswordChange} />
          </label>
          <label>Re-Type Password
            <input  type="password"
                    value={this.state.password2}
                    onFocus={this.blankDefaults}
                    onChange={this.handlePassword2Change} />
          </label>
          <button onClick={this.props.voidModal}>Cancel</button>
          <button>Create Account</button>
        </form>
      );
    }
  });

}(this));
