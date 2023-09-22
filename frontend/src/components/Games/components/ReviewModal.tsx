import React from 'react';

type Props = {
	onChangeModalFlag: () => void;
};

const ReviewModal = ({ onChangeModalFlag }: Props) => {
	return (
		<div className="fixed left-0 top-0 z-50 flex h-full w-full  text-white-950">
			<div className="h-full w-full bg-white-950 bg-opacity-50 "></div>

			{/* 모달창 */}
			<div className="fixed left-1/2 top-1/2 flex h-[500px] w-[800px] -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-8 rounded-xl bg-white-100 px-16 pb-16 pt-16">
				<p className="text-start font-dungGeunMo text-4xl">게임 제목</p>
				<div className="flex flex-col items-center gap-4 text-center"></div>
				<div className="relative mb-3 w-full" data-te-input-wrapper-init>
					<textarea
						className="border-soild w-full flex-1 resize-none rounded  p-3 outline-none "
						id="exampleFormControlTextarea1"
						rows={3}
						placeholder="리뷰를 입력하세요. (20자)"
					></textarea>
				</div>

				{/* 버튼 */}
				<div>
					<button className="bg-red-700" onClick={onChangeModalFlag}>
						취소
					</button>
					<button className="bg-green-600" onClick={onChangeModalFlag}>
						등록
					</button>
				</div>
			</div>
		</div>
	);
};

export default ReviewModal;
