import React from 'react';
import { ManageCardItemType } from '../../typedef/MyPage/myPage.types';
import ManageCardItem from './components/ManageCardItem';

type Props = {
	items: ManageCardItemType[];
	nickname: string;
};

const ReviewManage = ({ items, nickname }: Props) => {
	return (
		<div className="mt-[100px] flex w-[1000px] flex-col gap-6 text-white-100">
			<p className="font-dungGeunMo text-[32px]">{nickname} 님이 작성한 리뷰</p>
			<p className="font-dungGeunMo text-[16px]">
				총 <span>{items.length}</span>건
			</p>
			<div className="flex flex-col gap-4">
				{items.map((item) => (
					<ManageCardItem key={item.type + item.itemSeq} item={item} />
				))}
			</div>
		</div>
	);
};

export default ReviewManage;