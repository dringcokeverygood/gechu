import React from 'react';

interface SlideProps {
	visibleImages: string[];
	onClickSlidePre: () => void;
	onClickSlideNext: () => void;
}

const MainTrend = ({
	visibleImages,
	onClickSlidePre,
	onClickSlideNext,
}: SlideProps) => {
	return (
		<div className="my-5 flex max-w-[1200px] flex-col items-center gap-4 ">
			{/* 헤더 */}
			<p className="h-12 flex-1 font-dungGeunMo text-[40px]">현재 유행 게임</p>

			{/* 슬라이드 */}
			<div className=" flex items-center gap-6 py-10">
				{visibleImages.map((image, index) => (
					<div
						key={index}
						className="group flex h-64 w-64 columns-3 items-center"
					>
						<img
							className="h-full w-full object-cover object-center  group-hover:opacity-40"
							src={image}
							alt={`게임${index + 1}`}
						/>
						<div className="text-white absolute items-center justify-center text-xl opacity-0 group-hover:opacity-100">
							<p>게임정보</p>
						</div>
					</div>
				))}
			</div>

			{/* 버튼 */}
			<div className="flex items-center justify-center">
				<button
					className="bg-gray-400 mr-4 px-4 py-2 text-white-100"
					onClick={onClickSlidePre}
				>
					이전
				</button>
				<button
					className="bg-gray-400 px-4 py-2 text-white-100"
					onClick={onClickSlideNext}
				>
					다음
				</button>
			</div>
		</div>
	);
};

export default MainTrend;
