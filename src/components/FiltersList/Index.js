import React from 'react';
import PropTypes from 'prop-types';
import './Styles.scss';

//simple functional component: sfc
const FilterList = props => {
	console.log(props);
	const {
		onGenderChange,
		onCityChange,
		stateAllGenders,
		stateAllCities,
		stateFilterGenders,
		stateFilterCities
	} = props;
	return (
		<section className="filters-list">
			<h2>Lista de filtros</h2>
			<form>
				<fieldset>
					<legend>Genders</legend>
					{/* <Input
                            name="female"
                            onChange={handleOnClick}
                            checked={true}
                        /> */}
					<div>
						<label htmlFor="female">Female</label>
						<input
							type="checkbox"
							//
							name="genders"
							id="female"
							value="female"
							onChange={onGenderChange}
							//We want the checkbox to be controlled component. On inputs texts, that is the value. Here, is if it is checked or not
							checked={stateFilterGenders.includes('female')}
						/>
					</div>

					<div>
						<label htmlFor="male">Male</label>
						<input
							type="checkbox"
							name="genders"
							id="male"
							value="male"
							onChange={onGenderChange}
							checked={stateFilterGenders.includes('male')}
						/>
					</div>

					<div>
						<label htmlFor="other">Other</label>
						<input
							type="checkbox"
							name="genders"
							id="other"
							value="other"
							onChange={onGenderChange}
							checked={stateFilterGenders.includes('other')}
						/>
					</div>
				</fieldset>

				<fieldset>
					<legend>Cities</legend>
					{stateAllCities.map((city, index) => {
						return (
							<div key={index}>
								<label htmlFor={city}>{city}</label>
								<input
									type="checkbox"
									name="cities"
									id={city}
									value={city}
									onChange={onCityChange}
									checked={stateFilterCities.includes({ city })}
								/>
							</div>
						);
					})}
				</fieldset>
			</form>
		</section>
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
