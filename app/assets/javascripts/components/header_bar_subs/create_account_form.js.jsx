(function(root) {
  'use strict';
  var TA = root.TA = root.TA || {};

  TA.CreateAccountForm = React.createClass ({

  getInitialState: function () {
    return({username: "username",
            email: "you@example.ninja",
            password: "password",
            password2: "password",
            avatar: null,
            passwordOK: true,
            passwordsMatch: true,
            usernameOK: true,
            intervalID: null});
  },

  blankDefaults: function () {
    var u = (this.state.username === "username") ? "" : this.state.username;
    var e = (this.state.email === "you@example.ninja") ? "" : this.state.email;
    var p1 = (this.state.password === "password") ? "" : this.state.password;
    var p2 =(this.state.password2 === "password") ? "" : this.state.password2;
    this.setState({username: u, email: e, password: p1, password2: p2});
  },

  handleUsernameChange: function (e) {
    var username = e.currentTarget.value;
    var me = this;
    clearInterval(this.state.intervalID);

    this.setState({username: username, intervalID: (
      setInterval(function () {
        TA.AjaxUtil.API.checkUsernameAvailability(username,
            function() {
              me.setState({usernameOK: true});
              clearInterval(me.state.intervalID);},
            function() {
              me.setState({usernameOK: false});
              clearInterval(me.state.intervalID);}
          );
      }, 500))});
  },

  handlepasswordChange: function (e) {
    this.setState({password: e.currentTarget.value});
    setTimeout(this.checkPasswordLength.bind(this, e.currentTarget.value), 750);
  },

  checkPasswordLength: function (pw) {
    this.setState({passwordOK: (pw.length > 7)});
  },

  handlePassword2Change: function (e) {
    this.setState({password2: e.currentTarget.value});
    setTimeout(this.checkPasswordsMatch.bind(this, e.currentTarget.value), 750);
  },

  checkPasswordsMatch: function (newPw2) {
    this.setState({passwordsMatch: (this.state.password === newPw2)});
  },

  handleEmailChange: function (e) {
    this.setState({email: e.currentTarget.value});
  },

  updateAvatar: function (e) {
      this.setState({avatar: e.currentTarget.src});
  },


  createUser: function () {
    if (this.state.passwordOK &&
     this.state.usernameOK &&
     this.state.passwordsMatch &&
     this.state.username !== "username") {

        TA.AjaxUtil.API.createUser(this.state, this.props.voidModal, this.tryAgain());
        }

  },

  tryAgain: function() {
    this.setState($.extend({}, this.getInitialState, {error: true}));
  },

  enterOrEscape: function(e) {
    switch(e.charCode) {
    case 13:
      this.createUser();
      e.preventDefault();
      e.stopPropagation();
      break;
    case 27:
      this.props.voidModal();
    }

  },

    render: function () {
      return(
        <form onSubmit={this.createUser} onKeyPress={this.enterOrEscape}>
          {(this.state.error) ? <strong> Something went wrong.  :-(  Please try again. </strong> : "" }
          <label>Username
            <input  type="text"
                    value={this.state.username}
                    onFocus={this.blankDefaults}
                    onChange={this.handleUsernameChange}
                    className={(this.state.usernameOK) ? "ok" : "invalid"}
                    on />
            {(this.state.usernameOK) ? "" :
              <strong>Sorry, this username is unavailable. </strong>}
          </label>
          <label>Email
            <input  type="email"
                    value={this.state.email}
                    onFocus={this.blankDefaults}
                    onChange={this.handleEmailChange} />
          </label>
          <label>Select an avatar
              <TA.AvatarSelector selected={this.state.avatar} selectAvatar={this.updateAvatar}/>
          </label>
          <label>Password
            <input  type="password"
                    value={this.state.password}
                    onFocus={this.blankDefaults}
                    onChange={this.handlepasswordChange} />
            {(this.state.passwordOK) ? "" :
                <strong>Password too short.</strong>}
          </label>
          <label>Retype Password
            <input  type="password"
                    value={this.state.password2}
                    onFocus={this.blankDefaults}
                    onChange={this.handlePassword2Change} />
            {(this.state.passwordsMatch) ? "" :
                  <strong>Passwords do not match.</strong>}
          </label>

          <div className="login-buttons">
            <button onClick={this.props.voidModal} className="button-cancel">Cancel</button>
            <button  type="submit" disabled={
                (this.state.password !== "" &&
                 this.state.passwordOK &&
                 this.state.usernameOK &&
                 this.state.passwordsMatch &&
                 this.state.username !== "username") ? false : true}
              >Create Account</button>
          </div>
        </form>
      );
    }
  });

}(this));
