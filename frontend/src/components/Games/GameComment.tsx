import React from 'react';
import { GameCommentType } from '../../typedef/Game/games.types';
import UserProfileItem from '../Common/UserProfileItem';

const GameComment = ({ comment }: { comment: GameCommentType }) => {
	return (
		<div className="space-y-2 px-2 py-2 text-white-200">
			<div className="flex flex-row items-center space-x-4">
				<UserProfileItem profile={comment.userProfile} size="small" />
			</div>
			<div>{comment.content}</div>
		</div>
	);
};

export default GameComment;
