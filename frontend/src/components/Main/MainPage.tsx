import React from 'react';
import GameRecommendContainer from './Containers/GameRecommendContainer';
import GameTrendContainer from './Containers/GameTrendContainer';
import GameNewsContainer from './Containers/GameNewsContainer';
import GameArticleContainer from './Containers/GameArticleContainer';

const MainPage = () => {
	return (
		<div className="my-20 flex max-w-[1200px] flex-col gap-4 ">
			<GameTrendContainer />
			<GameRecommendContainer />
			<GameNewsContainer />
			<GameArticleContainer />
		</div>
	);
};

export default MainPage;
