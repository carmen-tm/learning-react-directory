import React from 'react';
import PropTypes from 'prop-types';
import Card from '../Card';

import './styles.scss';

const PeopleList = props => {
	return (
		<section className="people-list">
			<h2>Lista de people</h2>
			<ul>
				{props.people.map(person => {
					return (
						//Li items have a key with the id that I have created before as a new key in the setState function
						<li key={person.id}>
							<Card
								fullName={person.fullName}
								img={person.picture.medium}
								city={person.location.city}
								age={person.registered.age}
							/>
						</li>
						//When one thing is working, it's time to go to the Card element and prepare the rest with PropTypes (what if is it something empty? etc)
						// <div className="card">
						// 	<h2>{person.fullName}</h2>
						// </div>
					);
				})}
			</ul>
		</section>
	);
};

//Proptypes that arrive to this component!! In this case, the people object, which has a people key with an array
PeopleList.propTypes = {
	people: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default PeopleList;
