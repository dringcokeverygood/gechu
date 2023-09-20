import React from 'react';
import { Outlet } from 'react-router-dom';
import HeaderContainer from '../components/Common/containers/HeaderContainer';

const LayoutWithHeader = () => {
	return (
		<div className="bg-white-950">
			<HeaderContainer />
			<div className="pt-20">
				<Outlet />
			</div>
		</div>
	);
};

export default LayoutWithHeader;
