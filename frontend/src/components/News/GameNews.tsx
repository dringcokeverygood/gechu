import React from 'react';
import BNewsCardContainer from '../Common/containers/BNewsCardContainer';
import { GameNewsPreviewType } from '../../typedef/main.types';

type NewsCardProps = {
	newsList: GameNewsPreviewType[];
	onClickNewTab: (url: string) => void;
};

const GameNews = ({ newsList, onClickNewTab }: NewsCardProps) => {
	return (
		<div className=" w-[1200px]">
			{newsList.length > 0 && (
				<div
					className="my-10 flex cursor-pointer bg-white-900 hover:bg-white-700 "
					onClick={() => onClickNewTab(newsList[0].url)}
				>
					<img
						src={newsList[0].imageUrl}
						alt=""
						className="h-80 w-5/12 object-cover"
					/>
					<div className="flex h-80 w-7/12 flex-col p-4">
						<p className="line-clamp-2 break-all font-dungGeunMo text-4xl">
							{newsList[0].headline}
						</p>
						<div className="mt-4 flex-1">
							<p className="line-clamp-[8] flex-1 break-words text-xl leading-tight">
								{newsList[0].content}
							</p>
						</div>
					</div>
				</div>
			)}

			<div className="flex w-[1200px] flex-col justify-center">
				<div className="flex flex-wrap content-start items-start justify-start gap-6 self-stretch pb-10">
					{/* 두 번째 뉴스부터 나머지 뉴스 카드를 표시 */}
					{newsList.slice(1).map((news) => (
						<BNewsCardContainer key={news.url} news={news} />
					))}
				</div>
			</div>
		</div>
	);
};

export default GameNews;
