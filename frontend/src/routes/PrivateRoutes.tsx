import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

type Props = {
	redirectTo: string;
};

const PrivateRoutes = ({ redirectTo }: Props) => {
	const isLogin = localStorage.getItem('login') ? true : false;

	return isLogin ? <Outlet /> : <Navigate to={redirectTo} replace />;
};

export default PrivateRoutes;
