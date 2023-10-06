import React, { useState, useCallback, useEffect } from 'react';
import DashBoard from '../DashBoard';
import { LikeGameItemType } from '../../../typedef/Game/games.types';
import { DashBoardType } from '../../../typedef/MyPage/myPage.types';
import { http } from '../../../utils/http';
import { useRecoilState } from 'recoil';
import { userState } from '../../../recoil/UserAtom';

interface GetLikeGames {
	estimates: LikeGameItemType[];
	success: boolean;
	message: string;
}

const DashBoardContainer = () => {
	const [userInfo] = useRecoilState(userState);
	const [LikeGames, setLikeGames] = useState<LikeGameItemType[]>([]);

	useEffect(() => {
		http
			.get<GetLikeGames>(`web/users/${userInfo.userSeq}/estimates`)
			.then((data) => {
				const { estimates } = data;
				setLikeGames(estimates);
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
