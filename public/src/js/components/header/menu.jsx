import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Logo from './logo';

class Menu extends Component {

	render() {

		return(

			<nav className="navbar navbar-expand-lg navbar-light bg-light">
				<Logo />
				<ul className="navbar-nav mr-auto">
					<li className="nav-item active"><Link to="/" className="nav-link">Home</Link></li>
					<li className="nav-item"><Link to="/category" className="nav-link">Category</Link></li>
					<li className="nav-item"><Link to="/product" className="nav-link">Product</Link></li>
					<li className="nav-item"><Link to="/page-slug" className="nav-link">Page</Link></li>
					<li className="nav-item"><Link to="/login" className="nav-link">Login</Link></li>
					<li className="nav-item"><Link to="/register" className="nav-link">Register</Link></li>
				</ul>

			</nav>

		);

	}

}

export default Menu;