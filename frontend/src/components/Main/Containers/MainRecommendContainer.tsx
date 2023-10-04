import React, { useState, useEffect } from 'react';
import { http } from '../../../utils/http';

import { GamePreviewType } from '../../../typedef/Game/games.types';
import MainRecommend from '../MainRecommend';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { userState } from '../../../recoil/UserAtom';
import { LoginAtom } from '../../../recoil/LoginAtom';

const MainRecommendContainer = () => {
	const [recommendGames, setRecommendGames] = useState<GamePreviewType[]>([]);
	const userInfo = useRecoilValue(userState);
	const isLogin = useRecoilValue(LoginAtom);

	const navigate = useNavigate();

	const onClickBtn = () => {
		navigate('/game-recommend');
	};

	const onClickGame = (url: string) => {
		navigate(url);
	};

	useEffect(() => {
		http
			.get<GamePreviewType[]>(`game/games`)
			.then((data) => {
				// console.log('recommendList :', data);

				let first20Games = data.slice(0, 20);

				if (data.length < 20) {
					const needGames = 20 - data.length;
					http
						.get<GamePreviewType[]>(`additional/games`)
						.then((addData) => {
							first20Games = first20Games.concat(addData.slice(0, needGames));
							setRecommendGames(first20Games);
						})
						.catch((addErr) => console.log(addErr));
				} else {
					setRecommendGames(first20Games);
				}
			})
			.catch((err) => console.log(err));
	}, []);

	return (
		<MainRecommend
			games={recommendGames}
			onClickBtn={onClickBtn}
			onClickGame={onClickGame}
			userInfo={userInfo}
			isLogin={isLogin}
		/>
	);
};

export default MainRecommendContainer;
