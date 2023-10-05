import React from 'react';
import BNewsCardContainer from '../Common/containers/BNewsCardContainer';
import { GameNewsPreviewType } from '../../typedef/main.types';

type NewsCardProps = {
	newsList: GameNewsPreviewType[];
};

const SearchNews = ({ newsList }: NewsCardProps) => {
	return (
		<div>
			<div className="flex w-[1200px] flex-col justify-center">
				<div className="flex flex-wrap content-start items-start justify-start gap-6 self-stretch pb-10 ">
					{newsList.map((news) => (
						<BNewsCardContainer key={news.url} news={news} />
					))}
				</div>
			</div>
		</div>
	);
};

export default SearchNews;
