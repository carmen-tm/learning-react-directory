import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './styles.scss';

const Card = props => {
	const { id, fullName, img, city, age } = props;
	return (
		//Each card could be an article
		<article className="card">
			<h2>{fullName}</h2>
			<img src={img} alt={fullName} />
			<p>{city}</p>
			<p>{age}</p>
			<Link to={`/user/${id}`}> Más info </Link>
		</article>
	);
};

//It arrives an object with different keys, with everything strings
Card.propTypes = {
	id: PropTypes.number.isRequired,
	fullName: PropTypes.string.isRequired,
	img: PropTypes.string.isRequired,
	city: PropTypes.string.isRequired,
	age: PropTypes.number.isRequired
};

export default Card;
