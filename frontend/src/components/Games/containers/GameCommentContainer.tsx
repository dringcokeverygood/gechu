import React from 'react';
import { http } from '../../../utils/http';
import { userState } from '../../../recoil/UserAtom';
import { GameCommentType } from '../../../typedef/Game/games.types';
import GameComment from '../GameComment';
import { useRecoilValue } from 'recoil';

const GameCommentContainer = ({
	comment,
	fetchComments,
}: {
	comment: GameCommentType;
	fetchComments: () => void;
}) => {
	const userInfo = useRecoilValue(userState);
	const deleteComment = (seq: number) => {
		http
			.delete(`web/comments/${seq}`)
			.then(() => {
				fetchComments();
			})
			.catch((e) => console.log(e));
	};
	return (
		<GameComment
			comment={comment}
			isMine={userInfo.userSeq === comment.userProfile.seq}
			onClickDeleteBtn={(seq) => deleteComment(seq)}
		/>
	);
};

export default GameCommentContainer;
