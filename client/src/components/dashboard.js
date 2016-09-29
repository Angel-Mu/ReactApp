'use strict'
import React, { Component } from "react";

import { testAction } from '../actions/index.js';
import { connect } from 'react-redux';

function mapStateToProps(state) {  
	return {
		auth: state.auth
	};
}

class Dashboard extends Component {
	handleClickHello() {
		this.props.testAction();
	}
	render() {
		return (
			<div>
				<h4>This is the dashboard</h4>
				<a onClick={this.handleClickHello.bind(this)}>Knock Knock</a>
				<h3>{this.props.auth.message}</h3>
			</div>
		);
	}
}

export default connect(mapStateToProps, { testAction })(Dashboard);
