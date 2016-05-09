'use strict';
import React from "react";

export default class SideBar extends React.Component {
	render() {
		return (
			<div className="col-sm-12 col-md-12 "><div className="row">{this.props.children}</div></div>
		);
	}
}
