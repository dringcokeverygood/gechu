import React, { useState, useEffect } from 'react';
import ArticleManage from '../ArticleManage';
import { ManageCardItemType } from '../../../typedef/MyPage/myPage.types';
import { http } from '../../../utils/http';

interface GetArticleList {
	articleList: ManageCardItemType[];
	success: boolean;
	message: string;
}

const ArticleManageContainer = () => {
	const nickname = '자몽';

	const [myArticleList, setMyArticleList] = useState<ManageCardItemType[]>([]);

	useEffect(() => {
		http.get<GetArticleList>(`web/users/4/articles`).then((data) => {
			const { articleList } = data;
			console.log(articleList);
			if (articleList !== undefined) {
				setMyArticleList(articleList);
			}
		});
	}, []);

	return (
		<div>
			<ArticleManage items={myArticleList} nickname={nickname} />
		</div>
	);
};

export default ArticleManageContainer;
