import React from 'react';
import ManageCardItem from './components/ManageCardItem';
import { ManageCardItemType } from '../../typedef/MyPage/myPage.types';
import { images } from '../../constants/images';

type Props = {
	items: ManageCardItemType[];
	nickname: string;
	onClickDeleteBtn: (seq: number) => void;
};

const ArticleManage = ({ items, nickname, onClickDeleteBtn }: Props) => {
	return (
		<div className="mt-[100px] flex w-[1000px] flex-col gap-6 text-white-100">
			<p className="font-dungGeunMo text-[32px]">
				{nickname} 님이 작성한 게시글
			</p>
			<p className="font-dungGeunMo text-[16px]">
				총 <span>{items.length}</span>건
			</p>
			{items.length > 0 ? (
				<div className="flex flex-col gap-4">
					{items.map((item) => (
						<ManageCardItem
							key={item.type + item.itemSeq}
							item={item}
							onClickDeleteBtn={onClickDeleteBtn}
						/>
					))}
				</div>
			) : (
				<div className="flex flex-col items-center justify-center">
					<img src={images.sadGechu} />
					<p className="font-dungGeunMo text-[24px]">게시글이 없습니다.</p>
				</div>
			)}
		</div>
	);
};

export default ArticleManage;
