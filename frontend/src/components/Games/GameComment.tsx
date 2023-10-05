import React from 'react';
import { GameCommentType } from '../../typedef/Game/games.types';
import UserProfileItem from '../Common/UserProfileItem';

const GameComment = ({ comment }: { comment: GameCommentType }) => {
	return (
		<div className="flex flex-col space-y-2 px-2 py-2 text-white-200">
			<div className="flex flex-row items-center space-x-4">
				<UserProfileItem
					profile={comment.userProfile}
					size="small"
					date={comment.createDate}
				/>
			</div>
			<div className="px-1 py-2">{comment.content}</div>
		</div>
	);
};

export default GameComment;
