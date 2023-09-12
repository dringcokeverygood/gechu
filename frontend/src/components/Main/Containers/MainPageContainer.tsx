import React, { useState } from 'react';
import { images } from '../../../constants/images';
import MainPage from '../MainPage';

const MainPageContainer = () => {
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

	const handleNextSlide = () => {
		if (slideIndex + 4 < slideImages.length) {
			setSlideIndex(slideIndex + 4);
		}
	};

	const handlePreviousSlide = () => {
		if (slideIndex > 0) {
			setSlideIndex(slideIndex - 4);
		}
	};

	return (
		<MainPage
			visibleImages={visibleImages}
			handlePreviousSlide={handlePreviousSlide}
			handleNextSlide={handleNextSlide}
		/>
	);
};

export default MainPageContainer;
