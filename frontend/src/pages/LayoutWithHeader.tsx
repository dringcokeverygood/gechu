import React from 'react';
import { Outlet } from 'react-router-dom';
import HeaderContainer from '../components/common/containers/HeaderContainer';

const LayoutWithHeader = () => {
	return (
		<>
			<HeaderContainer />
			<Outlet />
		</>
	);
};

export default LayoutWithHeader;
