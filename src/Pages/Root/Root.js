import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../../Layouts/Footer/Footer';
import Navbar from '../../Layouts/Navbar/Navbar';

const Root = () => {
	return (
		<>
			<Navbar />
			<Outlet />
			<Footer />
		</>
	);
};

export default Root;
