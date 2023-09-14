import React from 'react';
import { Outlet } from 'react-router-dom';
import HeaderContainer from '../components/Common/containers/HeaderContainer';

const LayoutWithHeader = () => {
	return (
		<>
			<HeaderContainer />
			<div className="mt-20">
				<Outlet />
			</div>
		</>
	);
};

export default LayoutWithHeader;
