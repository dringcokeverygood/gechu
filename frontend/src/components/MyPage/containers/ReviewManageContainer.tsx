import React, { useEffect, useState } from 'react';
import { http } from '../../../utils/http';
import ReviewManage from '../ReviewManage';
import { ManageCardItemType } from '../../../typedef/MyPage/myPage.types';
import { useRecoilState } from 'recoil';
import { userState } from '../../../recoil/UserAtom';

interface GetReviewList {
	reviews: ManageCardItemType[];
	success: boolean;
	message: string;
}

const ReviewManageContainer = () => {
	const [userInfo] = useRecoilState(userState);

	const [myReviews, setMyReviews] = useState<ManageCardItemType[]>([]);

	useEffect(() => {
		http
			.get<GetReviewList>(`web/users/${userInfo.userSeq}/reviews`)
			.then((data) => {
				const { reviews } = data;
				setMyReviews(reviews);
			})
			.catch((err) => console.log(err));
	}, []);

	return (
		<div>
			<ReviewManage items={myReviews} nickname={userInfo.userName} />
		</div>
	);
};

export default ReviewManageContainer;
