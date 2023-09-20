import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import ScrollToTop from './ScrollToTop';

import LayoutWithHeader from '../pages/LayoutWithHeader';
import Home from '../pages/Home';
import Game from '../pages/Game';
import MyPage from '../pages/MyPage';

import GameReviewContainer from '../components/Games/containers/GameReviewContainer';
import GameListPage from '../pages/GameListPage';
import GameArticleListContainer from '../components/Games/containers/GameArticleListContainer';
import GameArticleContainer from '../components/Games/containers/GameArticleContainer';

// 마이페이지
import DashBoardContainer from '../components/MyPage/containers/DashBoardContainer';
import ArticleManageContainer from '../components/MyPage/containers/ArticleManageContainer';

const RootRouter = () => {
	return (
		<BrowserRouter>
			<ScrollToTop />
			<Routes>
				<Route path="/" element={<LayoutWithHeader />}>
					<Route index element={<Home />} />
					<Route path="/game-detail" element={<Game />}>
						<Route path="" element={<Navigate replace to="reviews" />} />
						<Route path="reviews" element={<GameReviewContainer />} />
						<Route path="articles" element={<GameArticleListContainer />} />
						<Route path="articles/:seq" element={<GameArticleContainer />} />
					</Route>
					<Route path="/game-list" element={<GameListPage />} />
					<Route path="/my-page" element={<MyPage />}>
						<Route index element={<DashBoardContainer />} />
						<Route path="article-manage" element={<ArticleManageContainer />} />
					</Route>
				</Route>
			</Routes>
		</BrowserRouter>
	);
};

export default RootRouter;
