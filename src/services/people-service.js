const numberResults = 10;

const URL = `https://randomuser.me/api/?results=${numberResults}`;

const fetchPeople = () => {
	return fetch(URL).then(response => response.json());
};

export default fetchPeople;
