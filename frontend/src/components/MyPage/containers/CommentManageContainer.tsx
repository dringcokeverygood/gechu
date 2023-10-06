import React from 'react';
import CommentManage from '../CommentManage';
import { ManageCommentCardItemType } from '../../../typedef/MyPage/myPage.types';

const CommentManageContainer = () => {
	const nickname = '자몽';
	const items: ManageCommentCardItemType[] = [
		{
			gameSeq: 1,
			gameTitle: '젤다의 전설',
			gameTitleImageUrl: '',
			commentSeq: 1,
			articleSeq: 1,
			content: '대박대박',
			createDate: '2023.09.01',
		},
	];
	return (
		<div>
			<CommentManage items={items} nickname={nickname} />
		</div>
	);
};

export default CommentManageContainer;
