import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import LayoutWithHeader from '../pages/LayoutWithHeader';
import Home from '../pages/Home';

const RootRouter = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<LayoutWithHeader />}>
					<Route index element={<Home />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
};

export default RootRouter;
