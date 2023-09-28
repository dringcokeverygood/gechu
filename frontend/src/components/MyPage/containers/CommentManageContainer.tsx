import React, { useEffect, useState } from 'react';
import CommentManage from '../CommentManage';
import { ManageCommentCardItemType } from '../../../typedef/MyPage/myPage.types';
import { http } from '../../../utils/http';

interface GetComments {
	comments: ManageCommentCardItemType[];
	success: boolean;
}

const CommentManageContainer = () => {
	const nickname = '자몽';
	// const items: ManageCommentCardItemType[] = [
	// 	{
	// 		gameSeq: 1,
	// 		gameTitle: '젤다의 전설',
	// 		gameTitleImageUrl: '',
	// 		commentSeq: 1,
	// 		articleSeq: 1,
	// 		content: '대박대박',
	// 		createDate: '2023.09.01',
	// 	},
	// ];

	const [myComments, setMyComments] = useState<ManageCommentCardItemType[]>([]);

	useEffect(() => {
		http.get<GetComments>(`web/users/4/comments`).then((data) => {
			const { comments } = data;
			console.log(comments);
			setMyComments(comments);
		});
	}, []);

	return (
		<div>
			<CommentManage items={myComments} nickname={nickname} />
		</div>
	);
};

export default CommentManageContainer;
