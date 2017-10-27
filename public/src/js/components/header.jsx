import React, {Component} from 'react';
import Logo from './header/logo';
import Menu from './header/menu';

class AppHeader extends Component {
	
	render() {

		return (
			<div>
				<Logo />
				<Menu />		
			</div>
		);

	}

} 

export default AppHeader;