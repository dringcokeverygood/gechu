import React from 'react';
import DashBoard from '../DashBoard';
import { LikeGameItemType } from '../../../typedef/Game/games.types';

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
	return (
		<div>
			<DashBoard games={dummy} />
		</div>
	);
};

export default DashBoardContainer;
