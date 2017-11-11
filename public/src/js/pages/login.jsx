import React, {Component, PureComponent} from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import LoginFormComponent from '../components/content/login-form'

class Login extends Component {
	
	render() {
		return (
			<div className="container">
				<LoginFormComponent />
			</div>
		);
	}
}

export default Login;