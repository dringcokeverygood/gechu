import React, { useState, useCallback } from 'react';
import DashBoard from '../DashBoard';
import { LikeGameItemType } from '../../../typedef/Game/games.types';
import { DashBoardType } from '../../../typedef/MyPage/myPage.types';

const DashBoardContainer = () => {
	const dummy: LikeGameItemType[] = [
		{
			gameSeq: 1,
			gameTitle: '젤다의 전설',
			gameTitleImageUrl: '',
		},
		{
			gameSeq: 2,
			gameTitle: '젤다의 전설',
			gameTitleImageUrl: '',
		},
		{
			gameSeq: 3,
			gameTitle: '젤다의 전설',
			gameTitleImageUrl: '',
		},
		{
			gameSeq: 4,
			gameTitle: '젤다의 전설',
			gameTitleImageUrl: '',
		},
		{
			gameSeq: 5,
			gameTitle: '젤다의 전설',
			gameTitleImageUrl: '',
		},
	];

	const [modalFlag, setModalFlag] = useState(false);
	const onChangeModalFlag = useCallback(() => {
		setModalFlag(!modalFlag);
	}, [modalFlag]);

	const content: DashBoardType = {
		LikeGames: dummy,
		modalFlag: modalFlag,
		onClick: onChangeModalFlag,
	};

	return (
		<div>
			<DashBoard content={content} />
		</div>
	);
};

export default DashBoardContainer;
