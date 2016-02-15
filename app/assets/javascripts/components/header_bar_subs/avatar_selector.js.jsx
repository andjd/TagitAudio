(function(root) {
  'use strict';
  var TA = root.TA = root.TA || {};
  var page = 0;

  TA.AvatarSelector = React.createClass ({
  	getInitialState: function() {
  		return {current: null};
  	},

  	populateAvatars: function () {
  		this.setState({avatars: this.shuffle(TA.AvatarStore.all())});
  		if (!this.current) {setTimeout(this.newAvatars, 60);}
  	},

  	newAvatars: function () {
  		this.setState({current: this.avatars(7)});
  	},

  	avatars: function(pageSize) {
  		if (this.state.avatars && page * pageSize > this.state.avatars.length) {page = 0;}
  		if (this.state.avatars) {
	  		var newAvatars = this.state.avatars.slice(page * pageSize, ++page * pageSize);
	  		this.setState({current: newAvatars});
  			return newAvatars;
	  	}
	  	return [];
  	},

  	componentDidMount: function() {
  		(this.state.avatars) ?  this.setState({avatars: this.shuffle(this.state.avatars)}) : TA.AjaxUtil.API.fetchAvatars();
  		TA.AvatarStore.addListener(this.populateAvatars);
  	},

  	componentWillUnmount: function() {
  		TA.AvatarStore.rmListener(this.populateAvatars);
  	},

  	handleClick: function (e) {
  		e.preventDefault();
  		if (e.currentTarget.className === "avatar-img") {
  			this.props.selectAvatar(e)
  		} else {this.newAvatars()}
  	},


  	shuffle: function(arr) {
            var i, temp, j, len = arr.length;
            for (i = 0; i < len; i++) {
                    j = Math.floor(Math.random() * (i + 1));
                    temp = arr[i];
                    arr[i] = arr[j];
                    arr[j] = temp;
            }
            return arr;
      },

  	render: function () {
  		return (
	  		<ul className="avatar-selector">
	  			{this.state.current && this.state.current.map(function(avatarURL) {
	  			  	return (<li key={avatarURL} className={(this.props.selected === avatarURL) ? "selected" : ""} >
	  			  				<img className="avatar-img"
						  			  	src={avatarURL}
						  			  	active={(this.props.selected === avatarURL)}
						  			  	onClick={this.handleClick} />
						  	</li>
						  	);
					}, this)
	  			}
				<span className="avatar-more"><button onClick={this.handleClick}>more . . . </button></span>
			</ul>
  		);

  	}
  });



}(this));
