(function(root) {
  'use strict';
  var TA = root.TA = root.TA || {};

  var count = 0;

  var lastTimeout ;

TA.LoadingModal = React.createClass ({
	getInitialState: function () {
		return {delay: 750}
	},

	componentDidMount: function () {

		this.setState({circles: [
							$(React.findDOMNode(this.refs.sm)),
							$(React.findDOMNode(this.refs.med)),
							$(React.findDOMNode(this.refs.lg))
						]});
		lastTimeout = setTimeout(this.animate,60)
	},

	componentWillUnmount: function () {
		count = 0;
		clearTimeout(lastTimeout);
	},

	shortenDelay: function () {
		var newDelay = this.state.delay * 0.92 ;
		if (newDelay < 275) {newDelay = 275};
		this.setState({delay: newDelay});
	},

	animate: function () {
		this.visibilize(count++ % 4);
		lastTimeout = setTimeout(this.animate, this.state.delay);
		this.shortenDelay();

	},

	visibilize: function (step) {

		if (step === 3){
			this.devisibilize();
		} else {
			this.state.circles && this.state.circles[step].animate({height: "100%", 
																	width: "100%", 
																	opacity: 1}, 
															(this.state.delay * .95), 'easeOutElastic');
		}
	},

	devisibilize: function () {
		this.state.circles.forEach(function ($el) {
			$el.animate({height: 0, width: 0, opacity: 0}, 100);
		}.bind(this));

	},


	render: function () {
		return (
			<div className="loading" >
				<span>g</span>
				<div className="loading-container-sm">
					<div className="loading-circle-sm" ref="sm" />
				</div>
				<div className="loading-container-med">
					<div className="loading-circle-med" ref="med"/>
				</div>
				<div className="loading-container-lg">
					<div className="loading-circle-lg" ref="lg"/>
				</div>
			</div>
			)
	}

})


}(this));
