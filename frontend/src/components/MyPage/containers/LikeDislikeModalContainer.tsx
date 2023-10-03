import { useState } from 'react';
import LikeDislikeModal from '../components/LikeDislikeModal';
import { LikeGameItemType } from '../../../typedef/Game/games.types';
import { http } from '../../../utils/http';

const LikeDislikeModalContainer = ({
	onClick,
}: {
	onClick: (e: React.MouseEvent) => void;
}) => {
	const [gameList, setGameList] = useState<LikeGameItemType[]>([]);

	http.get<LikeGameItemType[]>(`web/estimates?userSeq=3`).then((data) => {
		setGameList(data);
	});

	return (
		<div>
			<LikeDislikeModal gameList={gameList} onClickCloseBtn={onClick} />
		</div>
	);
};

export default LikeDislikeModalContainer;
