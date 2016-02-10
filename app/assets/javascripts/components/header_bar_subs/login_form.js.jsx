(function(root) {
  'use strict';
  var TA = root.TA = root.TA || {};

  TA.LoginForm = React.createClass ({
  getInitialState: function () {
    return({});
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
                          this.props.voidModal,
                          this.tryAgain);

  },

  tryAgain: function() {
    this.setState({error: true});
  },

  enterOrEscape: function(e) {
    switch(e.charCode) {
    case 13:
      e.preventDefault();
      e.stopPropagation();
      this.loginUser();
      break;
    case 27:
      this.props.voidModal();
    }

  },

    render: function () {
      return(
<<<<<<< 328ba2b45267a244188a639f6712d8b4cb24c863
        <form onSubmit={this.loginUser}>
        <strong>{this.props.message}</strong>
=======
        <form onSubmit={this.loginUser} onKeyPress={this.enterOrEscape}>
        {(this.state.error) ? <strong> Something went wrong.  :-(  Please try again. </strong> : ""}
>>>>>>> fix enter behavior on login and create account views and add useful failure messages
          <label>Username
            <input  type="text"
                    placeholder="Mr. Meeple"
                    value={this.state.username}
                    onChange={this.handleUsernameChange} />
          </label>
          <label>Password
            <input  type="password"
                    placeholder="••••••••"
                    value={this.state.password}
                    onChange={this.handlePasswordChange} />
          </label>

          <div className="login-buttons">
            <button onClick={this.props.voidModal} className="button-cancel" >Cancel</button>
            <button type="submit">Log In</button>
          </div>
        </form>
      );
    }
  });

}(this));
