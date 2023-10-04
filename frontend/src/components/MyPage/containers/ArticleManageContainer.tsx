import React, { useState, useEffect } from 'react';
import ArticleManage from '../ArticleManage';
import { ManageCardItemType } from '../../../typedef/MyPage/myPage.types';
import { http } from '../../../utils/http';
import { useRecoilState } from 'recoil';
import { userState } from '../../../recoil/UserAtom';

interface GetArticleList {
	articles: ManageCardItemType[];
	success: boolean;
	message: string;
}

const ArticleManageContainer = () => {
	const [userInfo] = useRecoilState(userState);

	const [myArticleList, setMyArticleList] = useState<ManageCardItemType[]>([]);

	const onClickDeleteBtn = (seq: number) => {
		http.delete(`web/articles/${seq}`).then(() => {
			setMyArticleList([]);
		});
	};

	useEffect(() => {
		http
			.get<GetArticleList>(`web/users/${userInfo.userSeq}/articles`)
			.then((data) => {
				const { articles } = data;
				setMyArticleList(articles);
			});
	}, [myArticleList]);

	return (
		<div>
			<ArticleManage
				items={myArticleList}
				nickname={userInfo.userName}
				onClickDeleteBtn={onClickDeleteBtn}
			/>
		</div>
	);
};

export default ArticleManageContainer;
