import React from 'react';
import PropTypes from 'prop-types';
import InputCheckbox from '../InputCheckbox';
import './styles.scss';

//simple functional component: sfc
const FilterList = props => {
	const {
		onGenderChange,
		onCityChange,
		stateAllGenders,
		stateAllCities,
		stateFilterGenders,
		stateFilterCities
	} = props;
	return (
		<aside className="filters-list">
			<h2>Lista de filtros</h2>
			<form>
				<fieldset>
					<legend>Genders</legend>

					{stateAllGenders.map((gender, index) => {
						return (
							<InputCheckbox
								key={index}
								onGenderChange={onGenderChange}
								gender={gender}
								stateFilterGenders={stateFilterGenders}
							/>
						);
					})}
				</fieldset>
				<fieldset>
					<legend>Cities</legend>
					{stateAllCities.map((city, index) => {
						return (
							<InputCheckbox
								key={index}
								onGenderChange={onCityChange}
								gender={city}
								stateFilterGenders={stateFilterCities}
							/>
						);
					})}
				</fieldset>
			</form>
		</aside>
	);
};

FilterList.propTypes = {
	onGenderChange: PropTypes.func.isRequired,
	onCityChange: PropTypes.func.isRequired,

	stateAllGenders: PropTypes.arrayOf(PropTypes.string).isRequired,
	stateAllCities: PropTypes.arrayOf(PropTypes.string).isRequired,

	stateFilterGenders: PropTypes.arrayOf(PropTypes.string).isRequired,
	stateFilterCities: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default FilterList;
