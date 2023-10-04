import React from 'react';
import { MdThumbDownOffAlt, MdThumbUpOffAlt } from 'react-icons/md';
import { GameReviewType } from '../../typedef/Game/games.types';

type Props = {
	onChangeModalFlag: () => void;
	onClickPref: (e: React.MouseEvent) => void;
	preference: { like: boolean; dislike: boolean };
	isButtonActive: boolean;
	//리뷰 POST위한 props
	review: GameReviewType;
	onTextChange: (content: string) => void;
	onSubmit: () => void;
};

const ReviewModal = ({
	onChangeModalFlag,
	onClickPref,
	preference,
	isButtonActive,
	review,
	onTextChange,
	onSubmit,
}: Props) => {
	return (
		<div className="fixed left-0 top-0 z-50 flex h-full w-full  text-white-950">
			<div className="h-full w-full bg-white-950 bg-opacity-50 "></div>

			{/* 모달창 */}
			<div className="fixed left-1/2 top-1/2 flex h-[500px] w-[800px] -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-8 rounded-xl bg-white-100 px-16 pb-16 pt-16">
				<p className="text-start font-dungGeunMo text-4xl">리뷰 등록</p>
				<div className="flex justify-center gap-3 text-lg">
					<p
						id="like"
						onClick={onClickPref}
						className={
							preference.like
								? `flex cursor-pointer items-center gap-1 rounded-full border-2 border-solid border-blue-500 bg-blue-500 px-2 py-1 font-dungGeunMo  text-white-100`
								: `flex cursor-pointer items-center gap-1 rounded-full border-2 border-solid border-blue-500 px-2 py-1 font-dungGeunMo  text-blue-500`
						}
					>
						좋아요 <MdThumbUpOffAlt size={24} id="like" />
					</p>
					<p
						id="dislike"
						onClick={onClickPref}
						className={
							preference.dislike
								? `flex cursor-pointer items-center gap-1 rounded-full border-2 border-solid border-red-400 bg-red-400 px-2 py-1 font-dungGeunMo  text-white-100`
								: `flex cursor-pointer items-center gap-1 rounded-full border-2 border-solid border-red-400 px-2 py-1 font-dungGeunMo  text-red-400`
						}
					>
						싫어요 <MdThumbDownOffAlt size={24} id="dislike" />
					</p>
				</div>
				<textarea
					value={review.content}
					onChange={(e) => onTextChange(e.target.value)}
					className="h-full w-full flex-1 resize-none rounded-lg p-3 outline-none"
					placeholder="내용을 입력하세요"
				></textarea>

				{/* 버튼 */}
				<div className="font-bold text-white-100">
					<button
						className="mx-2 h-10 w-16 rounded-xl bg-red-400 hover:bg-red-700"
						onClick={onChangeModalFlag}
					>
						취소
					</button>
					<button
						className={`mx-2 h-10 w-16 rounded-xl bg-blue-400${
							isButtonActive ? ' hover:bg-blue-700' : ' pointer-events-none'
						}`}
						onClick={onSubmit}
						disabled={!isButtonActive}
					>
						등록
					</button>
				</div>
			</div>
		</div>
	);
};

export default ReviewModal;
