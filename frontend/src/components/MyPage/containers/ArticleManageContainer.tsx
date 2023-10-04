import React, { useState, useEffect } from 'react';
import ArticleManage from '../ArticleManage';
import { ManageCardItemType } from '../../../typedef/MyPage/myPage.types';
import { http } from '../../../utils/http';
import { useRecoilState } from 'recoil';
import { userState } from '../../../recoil/UserAtom';

interface GetArticleList {
	articleList: ManageCardItemType[];
	success: boolean;
	message: string;
}

const ArticleManageContainer = () => {
	const [userInfo] = useRecoilState(userState);

	const [myArticleList, setMyArticleList] = useState<ManageCardItemType[]>([]);

	useEffect(() => {
		http
			.get<GetArticleList>(`web/users/${userInfo.userSeq}/articles`)
			.then((data) => {
				const { articleList } = data;
				console.log(articleList);
				if (articleList !== undefined) {
					setMyArticleList(articleList);
				}
			});
	}, []);

	return (
		<div>
			<ArticleManage items={myArticleList} nickname={userInfo.userName} />
		</div>
	);
};

export default ArticleManageContainer;
