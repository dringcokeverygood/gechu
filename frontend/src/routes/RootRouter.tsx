import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import LayoutWithHeader from '../pages/LayoutWithHeader';
import Home from '../pages/Home';
import Game from '../pages/Game';
import GameReviewContainer from '../components/Games/containers/GameReviewContainer';
import GameArticleListContainer from '../components/Games/containers/GameArticleListContainer';

const RootRouter = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<LayoutWithHeader />}>
					<Route index element={<Home />} />
					<Route path="/game-detail" element={<Game />}>
						<Route path="" element={<Navigate replace to="reviews" />} />
						<Route path="reviews" element={<GameReviewContainer />} />
						<Route path="articles" element={<GameArticleListContainer />} />
					</Route>
				</Route>
			</Routes>
		</BrowserRouter>
	);
};

export default RootRouter;
