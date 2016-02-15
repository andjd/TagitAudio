(function(root) {
  'use strict';
  var TA = root.TA = root.TA || {};

  TA.HeaderBar = React.createClass({
    render: function () {
      return(
        <header className="top-bar">
          <div className="w">
            <h1 className="logo">
              <span>Tagit</span>
              <span>AUDIO</span>
           </h1>
           <TA.User />
           </div>
        </header>
      );
    }
  });

}(this));
