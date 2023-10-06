import React from 'react';
import { ManageCardItemType } from '../../typedef/MyPage/myPage.types';
import ManageCardItemContainer from './containers/ManageCardItemContainer';
import { images } from '../../constants/images';

type Props = {
	items: ManageCardItemType[];
	nickname: string;
	onClickDeleteBtn: (seq: number) => void;
	getMyReviews: () => void;
};

const ReviewManage = ({
	items,
	nickname,
	onClickDeleteBtn,
	getMyReviews,
}: Props) => {
	return (
		<div className="mt-[100px] flex w-[1000px] flex-col gap-6 text-white-100">
			<p className="font-dungGeunMo text-[32px]">{nickname} 님이 작성한 리뷰</p>
			<p className="font-dungGeunMo text-[16px]">
				총 <span>{items.length}</span>건
			</p>
			{items.length > 0 ? (
				<div className="flex flex-col gap-4">
					{items.map((item) => (
						<ManageCardItemContainer
							key={item.type + item.itemSeq}
							item={item}
							onClickDeleteBtn={onClickDeleteBtn}
							getMyList={getMyReviews}
						/>
					))}
				</div>
			) : (
				<div className="flex flex-col items-center justify-center">
					<img src={images.sadGechu} />
					<p className="font-dungGeunMo text-[24px]">리뷰가 없습니다.</p>
				</div>
			)}
		</div>
	);
};

export default ReviewManage;
