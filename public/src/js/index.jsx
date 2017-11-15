import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import {Provider} from 'react-redux'

import Store from './store/store'

// pages 
import Home from './pages/home'
import Login from './pages/login'
import Register from './pages/register'
import Category from './pages/category'
import Product from './pages/product'
import Page from './pages/page'
import FourOFour from './pages/fourofour'

const App = () => {
	
	return (
		<Provider store={Store}>
			<Router>
				<Switch>
				
			    	<Route exact path="/" component={Home} />
			    	<Route path="/login" component={Login} />
			    	<Route path="/register" component={Register} />

			    	<Route path="/category" component={Category}>
			    		<Route path="/category/:slug" component={Category} />
			    	</Route>
			    	<Route path="/product" component={Product}>
						<Route path="/product/:slug" component={Product} />
					</Route>
					<Route path="/:slug" component={Page} />
					
					<Route component={FourOFour} />
				
			    
				</Switch>
			</Router>
		</Provider>
	);

}

ReactDOM.render( <App />, document.getElementById("Wrap") );