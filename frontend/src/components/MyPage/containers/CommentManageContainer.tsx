import React, { useEffect, useState } from 'react';
import CommentManage from '../CommentManage';
import { ManageCommentCardItemType } from '../../../typedef/MyPage/myPage.types';
import { http } from '../../../utils/http';
import { useRecoilState } from 'recoil';
import { userState } from '../../../recoil/UserAtom';

interface GetComments {
	comments: ManageCommentCardItemType[];
	success: boolean;
}

const CommentManageContainer = () => {
	const [userInfo] = useRecoilState(userState);

	const [myComments, setMyComments] = useState<ManageCommentCardItemType[]>([]);

	useEffect(() => {
		http
			.get<GetComments>(`web/users/${userInfo.userSeq}/comments`)
			.then((data) => {
				const { comments } = data;
				console.log(comments);
				setMyComments(comments);
			});
	}, []);

	return (
		<div>
			<CommentManage items={myComments} nickname={userInfo.userName} />
		</div>
	);
};

export default CommentManageContainer;
