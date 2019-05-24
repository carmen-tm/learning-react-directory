import React from 'react';

const UserDetailPage = props => {
	const { dataArr, match } = props;
	const { userId } = match.params;

	return (
		<React.Fragment>
			<h2>Soy una página de detalle</h2>
			<main>
				<p>Hay {dataArr.length} usuarios</p>
				<p>El seleccionado es {userId}</p>
			</main>
		</React.Fragment>
	);
};

export default UserDetailPage;
