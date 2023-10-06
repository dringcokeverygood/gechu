import React from 'react';
import { GamePreviewType } from '../../../typedef/Game/games.types';
import BGameCard from '../BGameCard';

const BGameCardContainer = ({ game }: { game: GamePreviewType }) => {
	return <BGameCard game={game} />;
};

export default BGameCardContainer;
