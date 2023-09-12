import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Game from '../pages/Game';
import GameReviewContainer from '../components/Games/containers/GameReviewContainer';

const RootRouter = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />}></Route>
				<Route path="/game-detail" element={<Game />}>
					<Route index element={<GameReviewContainer/>}></Route>
					{/* <Route path="articles" element={}></Route> */}
				</Route>
			</Routes>
		</BrowserRouter>
	);
};

export default RootRouter;
