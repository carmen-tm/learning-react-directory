import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import Home from './containers/Home';
import './App.scss';

class App extends React.Component {
	render() {
		return (
			<Switch>
				<Route>
					<Home />
				</Route>
			</Switch>
		);
	}
}

export default App;
