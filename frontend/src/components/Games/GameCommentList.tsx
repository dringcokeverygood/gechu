import React from 'react';
import { GameCommentType } from '../../typedef/Game/games.types';
import GameCommentContainer from './containers/GameCommentContainer';

const GameCommentList = ({ comments }: { comments: GameCommentType[] }) => {
	return (
		<div className="rounded-lg bg-white-950">
			{comments.map((comment) => {
				return <GameCommentContainer key={comment.seq} comment={comment} />;
			})}
		</div>
	);
};

export default GameCommentList;
