import React from 'react';
import { Link } from 'react-router-dom';

const UserDetailPage = props => {
	const { dataArr, match } = props;
	const { userId } = match.params;

	const selectedPerson = dataArr[parseInt(userId)];
	console.log(selectedPerson);
	const {
		fullName,
		cell,
		email,
		location,
		picture,
		registered
	} = selectedPerson;
	const { city, postcode, state } = location;
	const { large } = picture;
	const { age } = registered;

	return (
		<React.Fragment>
			<h2>Detalles personales</h2>
			<main>
				<p>Hay {dataArr.length} usuarios</p>
				<h2>{fullName}</h2>
				<img src={large} alt={fullName} />
				<p>
					Personal contact: {cell} / {email}
				</p>
				<p>
					Location: {city}, {postcode}, {state}
				</p>
				<p>Miembro desde hace: {age} años</p>

				<Link to="/"> Volver al Inicio </Link>
			</main>
		</React.Fragment>
	);
};

export default UserDetailPage;
