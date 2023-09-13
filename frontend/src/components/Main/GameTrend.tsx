import React from 'react';

interface SlideProps {
	visibleImages: string[];
	handlePreviousSlide: () => void;
	handleNextSlide: () => void;
}

const GameTrend = ({
	visibleImages,
	handlePreviousSlide,
	handleNextSlide,
}: SlideProps) => {
	return (
		<div className="my-5 flex max-w-[1200px] flex-col items-center gap-4 overflow-hidden">
			{/* 헤더 */}
			<p className="h-48 flex-1">현재 유행 게임</p>
			{/* 슬라이드 */}
			<div className="relative flex items-center gap-6 py-10">
				{visibleImages.map((image, index) => (
					<div
						key={index}
						className="relative flex h-64 w-64 columns-3 items-center"
					>
						<img
							className="absolute inset-0 h-full w-full object-cover object-center"
							src={image}
							alt={`게임${index + 1}`}
						/>
					</div>
				))}
			</div>

			{/* 버튼 */}
			<div className="flex items-center justify-center">
				<button
					className="bg-gray-400 mr-4 px-4 py-2 text-white-100"
					onClick={handlePreviousSlide}
				>
					이전
				</button>
				<button
					className="bg-gray-400 px-4 py-2 text-white-100"
					onClick={handleNextSlide}
				>
					다음
				</button>
			</div>
		</div>
	);
};

export default GameTrend;
