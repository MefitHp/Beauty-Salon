import React from 'react';
import { Route, Switch} from 'react-router-dom';

//Components
import HomePage from './Components/Home/HomePage';

const Routes = () =>(
		<Switch>
			<Route exact path="/" component={ HomePage }/>
		</Switch>
	);

export default Routes;