import React from 'react';
import GameRecommendContainer from '../components/Recommend/containers/GameRecommendContainer';

const GameRecommendPage = () => {
	return (
		<div className="flex flex-col items-center justify-center">
			<div className="mb-16 mt-[100px] font-dungGeunMo text-[64px] text-white-100">
				(유저)님 추천 게임
			</div>
			<GameRecommendContainer />
		</div>
	);
};

export default GameRecommendPage;
