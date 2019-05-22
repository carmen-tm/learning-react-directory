import React from 'react';
import PropTypes from 'prop-types';
import './Styles.scss';

const Card = props => {
	const { fullName, img, city, age } = props;
	return (
		//Each card could be an article
		<article className="card">
			<h2>{fullName}</h2>
			<img src={img} alt={fullName} />
			<p>{city}</p>
			<p>{age}</p>
		</article>
	);
};

//It arrives an object with different keys, with everything strings
Card.propTypes = {
	fullName: PropTypes.string.isRequired,
	img: PropTypes.string.isRequired,
	city: PropTypes.string.isRequired,
	age: PropTypes.number.isRequired
};

export default Card;
