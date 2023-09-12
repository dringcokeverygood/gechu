import React from 'react';
import { useNavigate } from 'react-router-dom';
import HomePage from '../HomePage';

const HomePageContainer: React.FC = () => {
	const navigation = useNavigate();

	const onClickLogin = () => {
		navigation('/login');
	};

	return <HomePage onLoginClick={onClickLogin} />;
};

export default HomePageContainer;
