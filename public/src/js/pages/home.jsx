import React, {Component} from 'react';

import AppHeader from '../components/header'
import AppContent from '../components/content'
import AppFooter from '../components/footer'

class Home extends Component {
	
	render() {
		return (
			<div className="container">
				<header><AppHeader /></header>
				<section><AppContent /></section>
				<footer><AppFooter /></footer>
			</div>
		);
	}
}

export default Home;