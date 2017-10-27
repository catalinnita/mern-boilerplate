import React, {Component, PureComponent} from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import AppHeader from '../components/header'
import AppContent from '../components/content'
import AppFooter from '../components/footer'

class Page extends Component {
	
	render() {
		return (
			<div className="container">
				<header><AppHeader /></header>
				<section>
					<div>
				    	<h3>ID: {this.props.match.params.slug}</h3>
				  	</div>
				</section>
				<footer><AppFooter /></footer>
			</div>
		);
	}
}

export default Page;