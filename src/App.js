import React from 'react';
import './App.scss';
import fetchPeople from './services/people-service';
import FilterList from './components/FiltersList/Index';
import PeopleList from './components/PeopleList/Index';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			people: {
				dataArr: [],
				//isFetching is for the Loading
				isFetching: true
			}
		};
	}

	//Methods
	getPeople() {
		fetchPeople().then(data => {
			this.setState({
				people: {
					// dataArr: data.results,

					//Gonna add a new key on the object with the full name, and another one for the id, as it has not
					dataArr: data.results.map((item, index) => {
						return {
							...item,
							id: `person-${index}`,
							fullName: `${item.name.first} ${item.name.last}`
						};
					}),
					//isFetching is for the Loading
					isFetching: false
				}
			});
		});
	}

	render() {
		const { dataArr, isFetching } = this.state.people;
		return (
			<div className="App">
				<header>
					<h1>People Directory</h1>
				</header>
				{isFetching ? (
					//If is true, is fetcthing, the loading appear
					<main>
						<p>Loading...</p>
					</main>
				) : (
					<main>
						<FilterList />
						<PeopleList people={dataArr} />
					</main>
				)}
			</div>
		);
	}

	componentDidMount() {
		this.getPeople();
	}
}

export default App;
