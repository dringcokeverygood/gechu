import GameCard from '../GameCard';
import { GamePreviewType } from '../../../typedef/Game/games.types';

const GameCardContainer = () => {
	const game: GamePreviewType = {
		gameSeq: 1,
		gameTitle: '젤다의 전설',
		gameTitleImageUrl: '',
		createDate: '',
		genre: '#오픈월드 #액션',
		platform: '#Switch',
		develop: '',
		publish: '',
		estimatePercent: 89,
	};

	return <GameCard game={game} />;
};

export default GameCardContainer;
