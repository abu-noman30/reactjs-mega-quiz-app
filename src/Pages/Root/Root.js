import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../../Layouts/Navbar/Navbar';

const Root = () => {
	return (
		<>
			<Navbar />
			<Outlet />
		</>
	);
};

export default Root;
