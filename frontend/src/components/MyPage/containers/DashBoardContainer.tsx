import React, { useState, useCallback, useEffect } from 'react';
import DashBoard from '../DashBoard';
import { LikeGameItemType } from '../../../typedef/Game/games.types';
import { DashBoardType } from '../../../typedef/MyPage/myPage.types';
import { http } from '../../../utils/http';

interface GetLikeGames {
	likeList: LikeGameItemType[];
	success: boolean;
	message: string;
}

const DashBoardContainer = () => {
	const [LikeGames, setLikeGames] = useState<LikeGameItemType[]>([]);

	useEffect(() => {
		http
			.get<GetLikeGames>(`web/users/4/estimates`)
			.then((data) => {
				const { likeList } = data;
				if (likeList !== undefined) {
					setLikeGames(likeList);
				}
			})
			.catch((err) => console.log(err));
	}, []);

	const [modalFlag, setModalFlag] = useState(false);
	const onChangeModalFlag = useCallback(() => {
		setModalFlag(!modalFlag);
	}, [modalFlag]);

	const content: DashBoardType = {
		LikeGames: LikeGames,
		modalFlag: modalFlag,
		onClick: onChangeModalFlag,
	};

	return (
		<div>
			<DashBoard content={content} />
		</div>
	);
};

export default DashBoardContainer;
