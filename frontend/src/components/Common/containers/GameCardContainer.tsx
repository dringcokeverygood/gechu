import GameCard from '../GameCard';
import { GamePreviewType } from '../../../typedef/Game/games.types';

const GameCardContainer = ({ game }: { game: GamePreviewType }) => {
	return <GameCard game={game} />;
};

export default GameCardContainer;
