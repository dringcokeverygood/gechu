import SearchGame from '../SearchGame';
import { GamePreviewType } from '../../../typedef/Game/games.types';

const SearchGameContainer = ({
	searchGames,
	loading,
}: {
	searchGames: GamePreviewType[];
	loading: boolean;
}) => {
	return <SearchGame loading={loading} games={searchGames} />;
};

export default SearchGameContainer;
