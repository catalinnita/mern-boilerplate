import React, {PureComponent} from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

class Logo extends PureComponent {
	
	render() {

		return <Link to="/" className="navbar-brand">Logo here</Link>;

	}

} 

export default Logo;