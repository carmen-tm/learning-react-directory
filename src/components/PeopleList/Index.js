import React from 'react';
import './Styles.scss';
import Card from '../Card/Index';

const PeopleList = () => {
	return (
		<section className="people-list">
			<h2>Lista de people</h2>
			<ul>
				<li>
					<Card />
				</li>
			</ul>
		</section>
	);
};

export default PeopleList;
