import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import Home from './pages/home'
import Category from './pages/category'
import Product from './pages/product'
import Page from './pages/page'


const App = () => {
	
	return (
		<Router>
			<div>
		    	<Route exact path="/" component={Home}/>
		    	<Route path="/category" component={Category}/>
				<Route path="/product" component={Product}/>
				<Route path="/page" component={Page}/>
			</div>
		    
		</Router>
	);

}

ReactDOM.render( <App />, document.getElementById("Wrap") );