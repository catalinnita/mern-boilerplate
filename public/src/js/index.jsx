import React from 'react';
import ReactDOM from 'react-dom'

import AppHeader from './components/header'
import AppContent from './components/content'
import AppFooter from './components/footer'

const App = () => {
	
	return (
		<div className="container">
			<header><AppHeader /></header>
			<section><AppContent /></section>
			<footer><AppFooter /></footer>
		</div>
	);

}

ReactDOM.render( <App />, document.getElementById("Wrap") );