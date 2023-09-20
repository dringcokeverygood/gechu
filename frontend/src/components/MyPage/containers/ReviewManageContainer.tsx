import React from 'react';
import ReviewManage from '../ReviewManage';
import { ManageCardItemType } from '../../../typedef/MyPage/myPage.types';

const ReviewManageContainer = () => {
	const nickname = '자몽';
	const items: ManageCardItemType[] = [
		{
			gameSeq: 1,
			gameTitle: '젤다의 전설',
			gameTitleImageUrl: '',
			type: 'reviews',
			itemSeq: 1,
			title: '',
			content: '대박대박',
			createDate: '2023.09.01',
			like: true,
			unlike: false,
		},
	];
	return (
		<div>
			<ReviewManage items={items} nickname={nickname} />
		</div>
	);
};

export default ReviewManageContainer;
