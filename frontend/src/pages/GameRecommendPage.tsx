import React from 'react';
import GameRecommendContainer from '../components/Recommend/containers/GameRecommendContainer';
import { useRecoilValue } from 'recoil';
import { userState } from '../recoil/UserAtom';

const GameRecommendPage = () => {
	const userInfo = useRecoilValue(userState);

	return (
		<div className="flex flex-col items-center justify-center">
			<div className="mb-16 mt-[100px] font-dungGeunMo text-[64px] text-white-100">
				{userInfo.userName}님 추천 게임
			</div>
			<GameRecommendContainer />
		</div>
	);
};

export default GameRecommendPage;
