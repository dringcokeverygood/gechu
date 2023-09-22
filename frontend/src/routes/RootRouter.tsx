import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from '../pages/Home';
import LoginPage from '../component/Login/LoginPage';
import LoginCallBackPage from '../component/Login/LoginCallBackPage';

const RootRouter = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />}></Route>
				<Route path="/login" element={<LoginPage />}></Route>
				<Route
					path="/login/oauth2/code/kakao"
					element={<LoginCallBackPage />}
				></Route>
			</Routes>
		</BrowserRouter>
	);
};

export default RootRouter;
