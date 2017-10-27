import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'


import Home from './pages/home'
import Category from './pages/category'
import Product from './pages/product'
import Page from './pages/page'
import FourOFour from './pages/fourofour'


const App = () => {
	
	return (
		<Router>
			<Switch>
			
		    	<Route exact path="/" component={Home}/>
		    	<Route path="/category" component={Category}>
		    		<Route path="/category/:slug" component={Category}/>
		    	</Route>
		    	<Route path="/product" component={Product}>
					<Route path="/product/:slug" component={Product}/>
				</Route>
				<Route path="/:slug" component={Page}/>
				
				<Route component={FourOFour}/>
			
		    
			</Switch>
		</Router>
	);

}

ReactDOM.render( <App />, document.getElementById("Wrap") );