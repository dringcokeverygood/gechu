import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Game from '../pages/Game';

const RootRouter = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />}></Route>
				<Route path="/game-detail" element={<Game />}></Route>
			</Routes>
		</BrowserRouter>
	);
};

export default RootRouter;
