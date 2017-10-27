import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

class Menu extends Component {

	render() {

		return(

			<ul>
				<li><Link to="/">Home</Link></li>
				<li><Link to="/category">Category</Link></li>
				<li><Link to="/product">Product</Link></li>
				<li><Link to="/page-slug">Page</Link></li>

			</ul>

		);

	}

}

export default Menu;