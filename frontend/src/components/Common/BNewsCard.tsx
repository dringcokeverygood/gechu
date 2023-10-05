import React from 'react';
import { GameNewsPreviewType } from '../../typedef/main.types';

type NewsCardProps = {
	news: GameNewsPreviewType;
	onClickNewTab: (url: string) => void;
};

const BNewsCard = ({ news, onClickNewTab }: NewsCardProps) => {
	return (
		<div
			onClick={() => onClickNewTab(news.url)}
			className="h- flex w-[282px] cursor-pointer flex-col hover:z-10 hover:scale-110 hover:transform"
		>
			<div className="flex h-14 w-full flex-col gap-2 overflow-hidden rounded-t-md bg-white-100 p-3  text-white-950">
				<div className="line-clamp-2 break-all font-dungGeunMo">
					{news.headline}
				</div>
			</div>

			{news.imageUrl ? (
				<img
					src={news.imageUrl}
					alt="뉴스 사진"
					className="h-[260px] w-[282px] object-cover"
				/>
			) : (
				<div className="flex h-[282px] w-[282px] items-center justify-center bg-white-200 p-5 font-dungGeunMo text-white-400">
					<span className="h-auto w-full text-center font-dungGeunMo">
						사이트 로고
					</span>
				</div>
			)}
		</div>
	);
};

export default BNewsCard;
