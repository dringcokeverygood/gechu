import React from 'react';
import { GameCommentType } from '../../../typedef/Game/games.types';
import GameComment from '../GameComment';

const GameCommentContainer = ({ comment }: { comment: GameCommentType }) => {
	return <GameComment comment={comment} />;
};

export default GameCommentContainer;
