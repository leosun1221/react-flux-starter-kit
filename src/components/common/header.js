"use strict";

var React = require('react');

var Header = React.createClass({
	render: function() {
		return (
			<nav className="navbar navbar-default">
				<div className="container-fluid">
					<a href="/" className="navbar-brand">
						<img src="images/logo.jpg"/>
					</a>
					<ul className="nav navbar-nav">
						<li><a href="/">Home</a></li>
						<li><a href="/#about">about</a></li>
					</ul>
				</div>
			</nav>
		);
	}
});

module.exports = Header;