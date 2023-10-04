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
import SearchPage from '../pages/SearchPage';
import GameRecommendPage from '../pages/GameRecommendPage';
import GameNewsPage from '../pages/GameNewsPage';

// 마이페이지
import DashBoardContainer from '../components/MyPage/containers/DashBoardContainer';
import ArticleManageContainer from '../components/MyPage/containers/ArticleManageContainer';
import ReviewManageContainer from '../components/MyPage/containers/ReviewManageContainer';
import CommentManageContainer from '../components/MyPage/containers/CommentManageContainer';
import LoginCallBackPage from '../components/Login/LoginCallBackPage';
import PrivateRoutes from './PrivateRoutes';

const RootRouter = () => {
	return (
		<BrowserRouter>
			<ScrollToTop />
			<Routes>
				<Route path="/" element={<LayoutWithHeader />}>
					<Route index element={<Home />} />
					<Route
						path="login/oauth2/code/kakao"
						element={<LoginCallBackPage />}
					/>
					<Route path="game-detail/:seq" element={<Game />}>
						<Route path="" element={<Navigate replace to="reviews" />} />
						<Route path="reviews" element={<GameReviewContainer />} />
						<Route path="articles" element={<GameArticleListContainer />} />
						<Route path="articles/:seq" element={<GameArticleContainer />} />
					</Route>
					<Route path="game-recommend" element={<GameRecommendPage />} />
					<Route path="game-list" element={<GameListPage />} />

					<Route element={<PrivateRoutes redirectTo="/" />}>
						<Route path="my-page" element={<MyPage />}>
							<Route index element={<DashBoardContainer />} />
							<Route
								path="article-manage"
								element={<ArticleManageContainer />}
							/>
							<Route path="review-manage" element={<ReviewManageContainer />} />
							<Route
								path="comment-manage"
								element={<CommentManageContainer />}
							/>
						</Route>
					</Route>
					<Route path="game-news" element={<GameNewsPage />} />
					<Route path="search" element={<SearchPage />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
};

export default RootRouter;
