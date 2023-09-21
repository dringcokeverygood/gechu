import React from 'react';
import { GameCommentType } from '../../typedef/Game/games.types';

const GameComment = ({ comment }: { comment: GameCommentType }) => {
	return (
		<div className="space-y-2 px-2 py-2 text-white-200">
			<div className="flex flex-row items-center space-x-4">
				<img
					className="inline-block h-10 w-10 rounded-full ring-2 ring-red-600"
					src="https://images.unsplash.com/photo-1552944150-6dd1180e5999?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1925&q=80"
					alt=""
				/>
				<div className="text-md font-dungGeunMo">{comment.userNickname}</div>
			</div>
			<div>{comment.content}</div>
		</div>
	);
};

export default GameComment;
