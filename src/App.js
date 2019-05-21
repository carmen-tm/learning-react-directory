import React from 'react';
import './App.scss';
import FilterList from './components/FiltersList/Index';
import PeopleList from './components/PeopleList/Index';

class App extends React.Component {
	render() {
		return (
			<div className="App">
				hola mundo
				<FilterList />
				<PeopleList />
			</div>
		);
	}
}

export default App;
