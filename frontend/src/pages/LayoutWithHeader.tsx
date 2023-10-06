import React from 'react';
import { Outlet } from 'react-router-dom';
import HeaderContainer from '../components/Common/containers/HeaderContainer';
import TopButton from '../components/Common/TopButton';

const LayoutWithHeader = () => {
	return (
		<div className="bg-white-950">
			<HeaderContainer />
			<TopButton />
			<div className="py-20">
				<Outlet />
			</div>
		</div>
	);
};

export default LayoutWithHeader;
