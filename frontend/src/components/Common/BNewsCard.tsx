import React from 'react';
import { GameNewsPreviewType } from '../../typedef/main.types';

const BNewsCard = ({ news }: { news: GameNewsPreviewType }) => {
	const onClickNewTab = (url: string) => {
		window.open(url, '-blank', 'noopener, noreferrer');
	};

	return (
		<div
			onClick={() => onClickNewTab(news.url)}
			className="flex w-[282px] cursor-pointer flex-col hover:z-10 hover:scale-110 hover:transform"
		>
			<div className="flex w-full flex-col gap-2 overflow-hidden rounded-t-md bg-white-100 p-3  text-white-950">
				<div className="truncate font-dungGeunMo">{news.headline}</div>
			</div>

			{news.image_url ? (
				<img
					src={news.image_url}
					alt="뉴스 사진"
					className="h-[282px] w-[282px] object-cover"
				/>
			) : (
				<div className="flex h-[282px] w-[282px] items-center justify-center rounded-t-md bg-white-200 p-5 font-dungGeunMo text-white-400">
					<span className="h-auto w-full overflow-hidden break-all text-center font-dungGeunMo">
						사이트 로고
					</span>
				</div>
			)}
			<div className="flex w-full flex-col gap-2 overflow-hidden rounded-b-md bg-white-100 p-3  text-white-950">
				<div className="truncate font-dungGeunMo">{news.company}</div>
				<div className="truncate font-dungGeunMo">{news.upload_date}</div>
			</div>
		</div>
	);
};

export default BNewsCard;
