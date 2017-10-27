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
					<Route path="/page/:slug" component={PageContent}/>
				</section>
				<footer><AppFooter /></footer>
			</div>
		);
	}
}

class PageContent extends Component {

	render() {

		console.log(this.props);

		return (
			<div>
		    	<h3>ID: {this.props.match.params.slug}</h3>
		  	</div>
		)
	}

}

export default Page;