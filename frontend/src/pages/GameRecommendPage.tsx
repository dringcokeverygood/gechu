import React from 'react';
import GameRecommendContainer from '../components/Recommend/containers/GameRecommendContainer';
import { useRecoilValue } from 'recoil';
import { userState } from '../recoil/UserAtom';
import { images } from '../constants/images';

const GameRecommendPage = () => {
	const userInfo = useRecoilValue(userState);

	return (
		<div className="flex flex-col items-center justify-center">
			{userInfo.userName ? (
				<>
					<div className="mb-16 mt-[100px] font-dungGeunMo text-[64px] text-white-100">
						{userInfo.userName}님 추천 게임
					</div>
					<GameRecommendContainer />
				</>
			) : (
				<>
					<div className="mb-16 mt-[100px] font-dungGeunMo text-[64px] text-white-100">
						추천 게임
					</div>
					<div className="mb-4 mt-16 font-dungGeunMo text-4xl text-white-100">
						로그인을 하시면 추천 게임을 제공받을 수 있습니다.
					</div>
					<img src={images.logo} alt="" />
				</>
			)}
		</div>
	);
};

export default GameRecommendPage;
