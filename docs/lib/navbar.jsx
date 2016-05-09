'use strict';
import React from "react";

export default class Nav extends React.Component {
	render() {
		return (
			<nav className="navbar navbar-fixed-top">
				<div className="container-fluid">
					<div className="navbar-header">
                        <ul className="navbar navbar-nav navbar-left"><img alt="Brand" src={this.props.userInfo.thumbnails}  className="img-circle" width="30px" /></ul>
                        <ul className="navbar navbar-nav navbar-right"> <a href="#" className="navbar-link">{this.props.userInfo.name}</a>  账户:<i className="navbar-btn">{this.props.userInfo.account}</i>元 </ul>
						<div id="debug_here"></div>
					</div>
				</div>
			</nav>
		);
	}
};
