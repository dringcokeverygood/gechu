import React, { useState, useEffect } from 'react';
import { http } from '../../../utils/http';
import { useParams } from 'react-router-dom';
import { userState } from '../../../recoil/UserAtom';
import { GameCommentType } from '../../../typedef/Game/games.types';
import GameCommentList from '../GameCommentList';
import { useRecoilValue } from 'recoil';

interface GetComments {
	comments: GameCommentType[];
	success: string;
}

const GameCommentListContainer = () => {
	const [comments, setComments] = useState<GameCommentType[]>([]);
	const userInfo = useRecoilValue(userState);
	const articleSeq = useParams().articleSeq;

	const fetchComments = () => {
		http
			.get<GetComments>(`web/comments`, { articleSeq: articleSeq })
			.then((data) => {
				console.log(data);
				setComments(data.comments);
			});
	};

	useEffect(() => {
		fetchComments();
	}, []);

	const [commentText, setCommentText] = useState('');

	const onSubmitComment = () => {
		//댓글 post로 전송하기
		http
			.post<GameCommentType>(`web/comments`, {
				articleSeq: articleSeq,
				userSeq: userInfo.userSeq,
				content: commentText,
			})
			.then((res) => {
				console.log(res);
				setCommentText('');
				fetchComments();
			})
			.catch((e) => console.log(e));
	};

	// const comments: GameCommentType[] = [
	// 	{
	// 		seq: 1,
	// 		articleSeq: 1,
	// 		userSeq: 2,
	// 		userNickname: '싸피데이',
	// 		content: '집에가서 게임해야지',
	// 		createDate: '2023-09-15',
	// 	},
	// 	{
	// 		seq: 2,
	// 		articleSeq: 1,
	// 		userSeq: 3,
	// 		userNickname: '아샷추',
	// 		content: '아이스티에 샷을 추가해서 드셔보세요',
	// 		createDate: '2023-09-15',
	// 	},
	// 	{
	// 		seq: 3,
	// 		articleSeq: 1,
	// 		userSeq: 1,
	// 		userNickname: '재밌으면 우는 애옹이',
	// 		content: '삐약삐약',
	// 		createDate: '2023-09-15',
	// 	},
	// ];

	return (
		<GameCommentList
			comments={comments}
			commentText={commentText}
			onTextChange={(text) => {
				setCommentText(text);
			}}
			onSubmit={onSubmitComment}
		/>
	);
};

export default GameCommentListContainer;
