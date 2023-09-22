import React from 'react';
import BNewsCard from '../BNewsCard';
import { GameNewsPreviewType } from '../../../typedef/main.types';

const BNewsCardContainer = ({ news }: { news: GameNewsPreviewType }) => {
	return <BNewsCard news={news} />;
};

export default BNewsCardContainer;
