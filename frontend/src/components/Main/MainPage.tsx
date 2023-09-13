import React from 'react';
import GameRecommendContainer from './Containers/GameRecommendContainer';
import GameTrendContainer from './Containers/GameTrendContainer';
import GameNewsContainer from './Containers/GameNewsContainer';

const MainPage = () => {
	return (
		<div className="my-20 flex max-w-[1200px] flex-col items-center gap-4">
			<GameNewsContainer />
			<GameTrendContainer />
			<GameRecommendContainer />
		</div>
	);
};

export default MainPage;
