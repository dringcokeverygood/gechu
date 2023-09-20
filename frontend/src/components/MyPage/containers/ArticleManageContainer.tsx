import React from 'react';
import ArticleManage from '../ArticleManage';
import { ManageCardItemType } from '../../../typedef/MyPage/myPage.types';

const ArticleManageContainer = () => {
	const nickname = '자몽';
	const items: ManageCardItemType[] = [
		{
			gameSeq: 1,
			gameTitle: '젤다의 전설',
			gameTitleImageUrl: '',
			type: 'articles',
			itemSeq: 1,
			title: '젤다는 전설이다',
			content: '대박대박',
			createDate: '2023.09.01',
		},
	];
	return (
		<div>
			<ArticleManage items={items} nickname={nickname} />
		</div>
	);
};

export default ArticleManageContainer;
