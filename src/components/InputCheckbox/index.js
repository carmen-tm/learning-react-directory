import React from 'react';
import PropTypes from 'prop-types';

const InputCheckbox = props => {
	const { onGenderChange, gender, stateFilterGenders } = props;
	return (
		<div>
			<label htmlFor={gender}>{gender}</label>
			<input
				type="checkbox"
				name="cities"
				id={gender}
				value={gender}
				onChange={onGenderChange}
				checked={stateFilterGenders.includes(gender)}
			/>
		</div>
	);
};

InputCheckbox.propTypes = {
	onGenderChange: PropTypes.func.isRequired,
	gender: PropTypes.string.isRequired,
	stateFilterGenders: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default InputCheckbox;
