import React from 'react';
import './Styles.scss';
import PropTypes from 'prop-types';

import Card from '../Card/Index';

const PeopleList = props => {
	return (
		<section className="people-list">
			<h2>Lista de people</h2>
			<ul>{/* {props.people.} */}</ul>
		</section>
	);
};

//Proptypes that arrive to this component!! The people object
PeopleList.propTypes = {
	people: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default PeopleList;
