import React, { useState, useEffect } from 'react';
import ArticleManage from '../ArticleManage';
import { ManageCardItemType } from '../../../typedef/MyPage/myPage.types';
import { http } from '../../../utils/http';
import { GamePreviewType } from '../../../typedef/Game/games.types';

interface GetArticleList {
	articleList: ManageCardItemType[];
	success: boolean;
	message: string;
}

const ArticleManageContainer = () => {
	const nickname = '자몽';
	// const items: ManageCardItemType[] = [
	// 	{
	// 		gameSeq: 1,
	// 		gameTitle: '젤다의 전설',
	// 		gameTitleImageUrl: '',
	// 		type: 'articles',
	// 		itemSeq: 1,
	// 		title: '젤다는 전설이다',
	// 		content: '대박대박',
	// 		createDate: '2023.09.01',
	// 		like: 'like',
	// 	},
	// ];

	const [myArticleList, setMyArticleList] = useState<ManageCardItemType[]>([]);

	useEffect(() => {
		http.get<GetArticleList>(`web/users/1/articles`).then((data) => {
			const { articleList } = data;
			console.log(articleList);
			articleList.map((l: ManageCardItemType) => {
				http
					.get<GamePreviewType>(`game/games/seq/${l.gameSeq}`)
					.then((game) => {
						l.gameTitle = game.gameTitle;
						l.gameTitleImageUrl = game.gameTitleImageUrl;
					});
			});

			setMyArticleList(articleList);
		});
	}, []);

	return (
		<div>
			<ArticleManage items={myArticleList} nickname={nickname} />
		</div>
	);
};

export default ArticleManageContainer;
