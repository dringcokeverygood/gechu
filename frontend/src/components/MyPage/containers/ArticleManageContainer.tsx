import React, { useState, useEffect } from 'react';
import ArticleManage from '../ArticleManage';
import { ManageCardItemType } from '../../../typedef/MyPage/myPage.types';
import { http } from '../../../utils/http';
import { useRecoilState } from 'recoil';
import { userState } from '../../../recoil/UserAtom';
import Swal from 'sweetalert2';

interface GetArticleList {
	articles: ManageCardItemType[];
	success: boolean;
	message: string;
}

const ArticleManageContainer = () => {
	const [userInfo] = useRecoilState(userState);

	const [myArticleList, setMyArticleList] = useState<ManageCardItemType[]>([]);

	const getMyArticleList = () => {
		http
			.get<GetArticleList>(`web/users/${userInfo.userSeq}/articles`)
			.then((data) => {
				const { articles } = data;
				setMyArticleList(articles);
			});
	};

	const onClickDeleteBtn = (seq: number) => {
		Swal.fire({
			title: '게시글 삭제',
			text: '정말 삭제하시겠습니까?',
			showCancelButton: true,
		}).then((result) => {
			if (result.isConfirmed) {
				http.delete(`web/articles/${seq}`).then(() => {
					getMyArticleList();
				});
			}
		});
	};

	useEffect(() => {
		getMyArticleList();
	}, []);

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
