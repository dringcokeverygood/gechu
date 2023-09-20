import React from 'react';
import { ManageCommentCardItemType } from '../../typedef/MyPage/myPage.types';
import ManageCommentCardItem from './components/ManageCommentCardItem';

type Props = {
	items: ManageCommentCardItemType[];
	nickname: string;
};

const CommentManage = ({ items, nickname }: Props) => {
	return (
		<div className="mt-[100px] flex w-[1000px] flex-col gap-6 text-white-100">
			<p className="font-dungGeunMo text-[32px]">{nickname} 님이 작성한 댓글</p>
			<p className="font-dungGeunMo text-[16px]">
				총 <span>{items.length}</span>건
			</p>
			<div className="grid grid-cols-2 gap-4">
				{items.map((item) => (
					<ManageCommentCardItem
						key={'comments' + item.articleSeq + item.commentSeq}
						item={item}
					/>
				))}
			</div>
		</div>
	);
};

export default CommentManage;
