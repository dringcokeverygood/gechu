import React, { useState } from 'react';
import { images } from '../../../constants/images';
import GameTrend from '../GameTrend';

const GameTrendContainer = () => {
	const [slideIndex, setSlideIndex] = useState(0);

	const slideImages = [
		images.dummy.gameImg1,
		images.dummy.gameImg2,
		images.dummy.gameImg3,
		images.dummy.gameImg4,
		images.dummy.gameImg5,
		images.dummy.gameImg6,
		images.dummy.gameImg7,
		images.dummy.gameImg1,
		images.dummy.gameImg2,
		images.dummy.gameImg3,
		images.dummy.gameImg4,
		images.dummy.gameImg5,
		images.dummy.gameImg6,
		images.dummy.gameImg7,
		images.dummy.gameImg1,
		images.dummy.gameImg2,
		images.dummy.gameImg3,
		images.dummy.gameImg4,
		images.dummy.gameImg5,
		images.dummy.gameImg6,
	];

	const visibleImages = slideImages.slice(slideIndex, slideIndex + 4);

	const onClickSlideNext = () => {
		if (slideIndex + 4 < slideImages.length) {
			setSlideIndex(slideIndex + 4);
		}
	};

	const onClickSlidePre = () => {
		if (slideIndex > 0) {
			setSlideIndex(slideIndex - 4);
		}
	};

	return (
		<GameTrend
			visibleImages={visibleImages}
			onClickSlidePre={onClickSlidePre}
			onClickSlideNext={onClickSlideNext}
		/>
	);
};

export default GameTrendContainer;
