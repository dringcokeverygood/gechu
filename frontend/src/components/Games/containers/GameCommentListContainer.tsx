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
				setComments(data.comments);
			});
	};

	useEffect(() => {
		fetchComments();
	}, []);

	const [commentText, setCommentText] = useState('');

	const onSubmitComment = () => {
		if (commentText.length === 0) return;
		//댓글 post로 전송하기
		http
			.post<GameCommentType>(`web/comments`, {
				articleSeq: articleSeq,
				userSeq: userInfo.userSeq,
				content: commentText,
			})
			.then(() => {
				setCommentText('');
				fetchComments();
			})
			.catch((e) => console.log(e));
	};
	return (
		<GameCommentList
			comments={comments}
			commentText={commentText}
			onTextChange={(text) => {
				setCommentText(text);
			}}
			onSubmit={onSubmitComment}
			fetchComments={fetchComments}
		/>
	);
};

export default GameCommentListContainer;
