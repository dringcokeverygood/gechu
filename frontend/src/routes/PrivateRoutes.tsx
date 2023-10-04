import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { LoginAtom } from '../recoil/LoginAtom';

type Props = {
	redirectTo: string;
};

const PrivateRoutes = ({ redirectTo }: Props) => {
	const isLogin = useRecoilValue(LoginAtom);

	return isLogin ? <Outlet /> : <Navigate to={redirectTo} replace />;
};

export default PrivateRoutes;
