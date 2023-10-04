import SearchGame from '../SearchGame';
import { GamePreviewType } from '../../../typedef/Game/games.types';

const SearchGameContainer = ({
	searchGames,
}: {
	searchGames: GamePreviewType[];
}) => {
	return <SearchGame games={searchGames} />;
};

export default SearchGameContainer;
