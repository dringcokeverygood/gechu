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
	const [loading, setLoading] = useState(false);

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
		setLoading(true);

		http
			.get<GamePreviewType[]>(`game/games`)
			.then((data) => {
				const gameList = data.slice(0, 20);
				setRecommendGames(gameList);
				setLoading(false);
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
			loading={loading}
		/>
	);
};

export default MainRecommendContainer;
