import React, {Component, PureComponent} from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import RegisterFormComponent from '../components/content/register-form'

class Register extends Component {
	
	render() {
		return (
			<div className="container">
				<RegisterFormComponent />
			</div>
		);
	}
}

export default Register;