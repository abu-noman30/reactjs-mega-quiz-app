import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Header from '../../Components/Header/Header';

const Home = () => {
	const loaderData = useLoaderData();
	const topicsData = loaderData.data;

	return (
		<>
			<Header topicsData={topicsData} />
		</>
	);
};

export default Home;
