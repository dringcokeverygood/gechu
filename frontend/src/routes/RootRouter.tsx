import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from '../pages/Login/LoginPage';
import LoginCallBackPage from '../pages/Login/LoginCallBackPage';

import LayoutWithHeader from '../pages/LayoutWithHeader';
import HomePageContainer from '../pages/Home/Containers/HomePageContainer';

const RootRouter = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/login" element={<LoginPage />}></Route>
				<Route
					path="/login/oauth2/code/kakao"
					element={<LoginCallBackPage />}
				></Route>
				<Route path="/" element={<LayoutWithHeader />}>
					<Route index element={<HomePageContainer />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
};

export default RootRouter;
