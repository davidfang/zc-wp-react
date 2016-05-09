'use strict';

import React from "react";

class ContentSection extends React.Component {
	render() {
		var { className } = this.props;
		return (
			<div id="ContentSection" className="col-sm-12 col-md-12  ">
				<h1 className="page-header">{this.props.title}</h1>
				{this.props.children}
			</div>
		);
	}
};

ContentSection.propTypes = {
	title: React.PropTypes.string.isRequired
};

export default ContentSection;
