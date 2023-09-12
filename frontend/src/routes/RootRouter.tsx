import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from '../pages/Login/LoginPage';
import LoginCallBackPage from '../pages/Login/LoginCallBackPage';
import HomePage from '../pages/Home/HomePage';

const RootRouter = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/login" element={<LoginPage />}></Route>
				<Route
					path="/login/oauth2/code/kakao"
					element={<LoginCallBackPage />}
				></Route>
				<Route path="/" element={<HomePage />}></Route>
			</Routes>
		</BrowserRouter>
	);
};

export default RootRouter;
