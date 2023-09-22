import React from 'react';
import BNewsCard from '../BNewsCard';
import { GameNewsPreviewType } from '../../../typedef/main.types';

type NewsCardProps = {
	news: GameNewsPreviewType;
};

const BNewsCardContainer = ({ news }: NewsCardProps) => {
	const onClickNewTab = (url: string) => {
		window.open(url, '-blank', 'noopener, noreferrer');
	};

	return <BNewsCard news={news} onClickNewTab={onClickNewTab} />;
};

export default BNewsCardContainer;
