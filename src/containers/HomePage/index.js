import React from 'react';
import { Link } from 'react-router-dom';
import FilterList from '../../components/FiltersList';
import PeopleList from '../../components/PeopleList';
import './styles.scss';

class Home extends React.Component {
	render() {
		const {
			dataArr,

			isFetching,
			allGenders,
			allCities,
			gendersSelected,
			citiesSelected,

			handleGenderFilter,
			handleCityFilter
		} = this.props;
		return (
			<div className="App">
				<header>
					<h1 className="App-title">People Directory</h1>
					<Link to="/user">Link a UserDetailPage</Link>
				</header>
				{isFetching ? (
					//If is true, is fetcthing, the loading appear
					<main>
						<p>Loading...</p>
					</main>
				) : (
					<main className="App-main">
						<FilterList
							onGenderChange={handleGenderFilter}
							onCityChange={handleCityFilter}
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
