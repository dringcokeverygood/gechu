import React, { useEffect, useState } from 'react';
import { http } from '../../../utils/http';
import ReviewManage from '../ReviewManage';
import { ManageCardItemType } from '../../../typedef/MyPage/myPage.types';
import { useRecoilState } from 'recoil';
import { userState } from '../../../recoil/UserAtom';
import Swal from 'sweetalert2';

interface GetReviewList {
	reviews: ManageCardItemType[];
	success: boolean;
	message: string;
}

const ReviewManageContainer = () => {
	const [userInfo] = useRecoilState(userState);

	const [myReviews, setMyReviews] = useState<ManageCardItemType[]>([]);

	const getMyReviews = () => {
		http
			.get<GetReviewList>(`web/users/${userInfo.userSeq}/reviews`)
			.then((data) => {
				const { reviews } = data;
				setMyReviews(reviews);
			})
			.catch((err) => console.log(err));
	};

	const onClickDeleteBtn = (seq: number) => {
		Swal.fire({
			title: '리뷰 삭제',
			text: '정말 삭제하시겠습니까?',
			showCancelButton: true,
		}).then((result) => {
			if (result.isConfirmed) {
				http.delete(`web/reviews/${seq}`).then(() => {
					getMyReviews();
				});
			}
		});
	};

	useEffect(() => {
		getMyReviews();
	}, []);

	return (
		<div>
			<ReviewManage
				items={myReviews}
				nickname={userInfo.userName}
				onClickDeleteBtn={onClickDeleteBtn}
				getMyReviews={getMyReviews}
			/>
		</div>
	);
};

export default ReviewManageContainer;
