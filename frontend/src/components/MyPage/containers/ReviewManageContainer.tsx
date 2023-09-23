import React, { useEffect, useState } from 'react';
import { http } from '../../../utils/http';
import ReviewManage from '../ReviewManage';
import { ManageCardItemType } from '../../../typedef/MyPage/myPage.types';

interface GetReviewList {
	reviewList: ManageCardItemType[];
	success: boolean;
	message: string;
}

const ReviewManageContainer = () => {
	const nickname = '자몽';

	const [myReviews, setMyReviews] = useState<ManageCardItemType[]>([]);

	useEffect(() => {
		http
			.get<GetReviewList>(`web/users/1/reviews`)
			.then((data) => {
				const { reviewList } = data;
				console.log(reviewList);
				setMyReviews(reviewList);
			})
			.catch((err) => console.log(err));
	}, []);

	return (
		<div>
			<ReviewManage items={myReviews} nickname={nickname} />
		</div>
	);
};

export default ReviewManageContainer;
