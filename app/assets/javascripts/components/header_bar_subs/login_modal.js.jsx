(function(root) {
  'use strict';
  var TA = root.TA = root.TA || {};

  TA.LoginModal = React.createClass({

    render: function () {
      return (
        <div  className={(this.props.activeModal === null) ?
                          "modal" : "modal active"}>
          <div className={"modal-scrim"}
               onClick={this.props.voidModal} />
          <div className="modal-content" >
            <header className="top-bar modal-bar">
              <h1 className="logo">
                <span>Tagit</span>
                <span>AUDIO</span>
              </h1>

              <div className="login-buttons">
                <button className="login-login"
                        onClick={this.props.activateModalLogin}
                        >Log In</button>
                <button className="login-create"
                        onClick={this.props.activateModalCreate}
                        >Create Account</button>
              </div>
            </header>

            {(this.props.activeModal === "login") ?
            <TA.LoginForm voidModal={this.props.voidModal} /> :
            <TA.CreateAccountForm voidModal={this.props.voidModal} />}


          </div>
        </div>
      );

    }

  });


}(this));
