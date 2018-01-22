import React, { Component } from 'react';
import NavbarPage from '../Navbar/NavbarPage';
import HomeDisplay from './HomeDisplay';

class HomePage extends Component{
	render(){
		return(
			<div>
				<NavbarPage />
				<HomeDisplay />
			</div>
			);
	}
}

export default HomePage;