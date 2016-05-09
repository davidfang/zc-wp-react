'use strict';
import React from "react";

export default class MenuGroup extends React.Component {
	render() {
		return (
        <div className="panel panel-default ">
            <div className="panel-body list-group list-inline ">
                {this.props.children}
            </div>
        </div>
		);
	}
};
