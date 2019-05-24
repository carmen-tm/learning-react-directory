import React from 'react';
import fetchPeople from '../../services/people-service';
import FilterList from '../../components/FiltersList';
import PeopleList from '../../components/PeopleList';
import './styles.scss';

class Home extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			people: {
				dataArr: [],
				//isFetching is for the Loading
				isFetching: true
			},
			filters: {
				allGenders: [],
				allCities: [],
				//Array because we can have multiple filters (accumulate them!) at the same time, they are not exclusive. Should be the same at the name attribute on the inputs checkbox.

				gendersSelected: [],
				citiesSelected: []
			}
		};

		//Bind all my methods
		this.handleGenderFilter = this.handleGenderFigitlter.bind(this);
		this.handleCityFilter = this.handleCityFilter.bind(this);
	}

	//Methods
	getPeople() {
		fetchPeople().then(data => {
			this.setState(prevState => {
				return {
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
					},
					filters: {
						...prevState.filters,
						allCities: data.results
							.map(item => {
								return item.location.city;
							})
							//Plus filter to delete duplicates
							.filter((item, ind, array) => array.indexOf(item) === ind),

						allGenders: data.results
							//I have all items here
							.map(item => {
								return item.gender;
							})
							//To delete duplicates, I can filter.
							//filter by a function that compares the first index of that value (IndexOf) with the actual ind (maybe Granada is twice..)
							.filter((item, ind, array) => array.indexOf(item) === ind)
					}
				};
			});
		});
	}

	componentDidMount() {
		this.getPeople();
	}

	handleGenderFilter(event) {
		const { value, checked } = event.currentTarget;
		//!!checked gives the opposite of what u see>> gives the intention. If it was checked, the user want to uncheck, so gives a FALSE.
		console.log(value, checked);

		this.setState(prevState => {
			return {
				filters: {
					...prevState.filters,

					//If it is checked
					gendersSelected: checked
						? //checkeo
						  prevState.filters.gendersSelected.concat(value)
						: //deschekeo
						  prevState.filters.gendersSelected.filter(item => item !== value)
					// genders: prevState.filters.genders.push
				}
			};
		});
	}

	handleCityFilter(event) {
		const { value, checked } = event.currentTarget;
		console.log(value, checked);

		this.setState(prevState => {
			return {
				filters: {
					...prevState.filters,
					//Check if it is in the array
					citiesSelected: prevState.filters.citiesSelected.find(
						item => item === value
					)
						? prevState.filters.citiesSelected.filter(item => item !== value)
						: prevState.filters.citiesSelected.concat(value)
				}
			};
		});
	}

	render() {
		const { dataArr, isFetching } = this.state.people;
		console.log('dataArr', dataArr);
		const {
			allGenders,
			allCities,
			gendersSelected,
			citiesSelected
		} = this.state.filters;
		return (
			<div className="App">
				<header>
					<h1 className="App-title">People Directory</h1>
				</header>
				{isFetching ? (
					//If is true, is fetcthing, the loading appear
					<main>
						<p>Loading...</p>
					</main>
				) : (
					<main className="App-main">
						<FilterList
							onGenderChange={this.handleGenderFilter}
							onCityChange={this.handleCityFilter}
							stateAllGenders={allGenders}
							stateAllCities={allCities}
							stateFilterGenders={gendersSelected}
							stateFilterCities={citiesSelected}
						/>
						{/* Want to pass the array the people already filtered! */}
						{/* <PeopleList people={dataArr} /> */}
						<PeopleList
							people={dataArr
								// .filter(person => {
								// 	if (gendersSelected.length === 0) {
								// 		//no filter, show EVERYTHING (all true)
								// 		return true;
								// 	} else {
								// 		//Retorna true si el género del item está incluido en el array de selección
								// 		return gendersSelected.includes(person.gender);
								// 	}
								// })
								.filter(person => {
									return (
										//Length of array ===0 equals !length
										!gendersSelected.length ||
										gendersSelected.includes(person.gender)
									);
								})
								.filter(person => {
									if (citiesSelected.length === 0) {
										//no filter, show EVERYTHING (all true)
										return true;
									} else {
										//Retorna true si el género del item está incluido en el array de selección
										return citiesSelected.includes(person.location.city);
									}
								})}
						/>
					</main>
				)}
			</div>
		);
	}
}

export default Home;
