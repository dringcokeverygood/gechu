import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import LayoutWithHeader from '../pages/LayoutWithHeader';
import Home from '../pages/Home';
import Game from '../pages/Game';
import GameReviewContainer from '../components/Games/containers/GameReviewContainer';

const RootRouter = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<LayoutWithHeader />}>
					<Route index element={<Home />} />
					<Route path="/game-detail" element={<Game />}>
						<Route index element={<GameReviewContainer/>}/>
						{/* <Route path="articles" element={}/> */}
					</Route>
				</Route>
			</Routes>
		</BrowserRouter>
	);
};

export default RootRouter;
