import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

class Menu extends Component {

	render() {

		return(

			<nav className="navbar navbar-dark bg-dark">
				<ul className="navbar-nav mr-auto">
					<li className="nav-item active"><Link to="/" className="nav-link">Home</Link></li>
					<li class="nav-item"><Link to="/category" className="nav-link">Category</Link></li>
					<li class="nav-item"><Link to="/product" className="nav-link">Product</Link></li>
					<li class="nav-item"><Link to="/page-slug" className="nav-link">Page</Link></li>

				</ul>
			</nav>

		);

	}

}

export default Menu;