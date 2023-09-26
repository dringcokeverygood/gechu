import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { CircularProgressbar } from 'react-circular-progressbar';
// eslint-disable-next-line import/no-extraneous-dependencies
import 'react-circular-progressbar/dist/styles.css';
import { GameInfoType } from '../../typedef/Game/games.types';

const GameDetail = ({ content }: { content: GameInfoType }) => {
	return (
		<div className="flex flex-col md:mx-32 lg:mx-36 xl:mx-40">
			<img
				src={content.gameTitleImageUrl}
				alt="game-title-image"
				className="h-48 w-full"
			></img>
			<div className="flex flex-row items-center justify-between">
				<div>
					<h1 className="py-5 font-dungGeunMo text-3xl text-white-200">
						{content.gameTitle}
					</h1>
					<div className="flex flex-row gap-2 pb-6 text-base text-white-200">
						<div className="flex w-36 flex-col space-y-1">
							<p>개발</p>
							<p>퍼블리싱</p>
							<p>발매일</p>
							<p>플랫폼</p>
							<p>장르</p>
						</div>
						<div className="flex w-full flex-col  space-y-1">
							<p>{content.develop}</p>
							<p>{content.publish}</p>
							<p>{content.createDate}</p>
							<p>{content.platforms.join(', ')}</p>
							<p>{content.genres.join(', ')}</p>
						</div>
					</div>
				</div>
				<div className="mt-4 flex flex-row">
					<div className="flex flex-col items-center space-y-2 px-4">
						<img
							className="max-h-8"
							src="https://11bitstudios.com/wp-content/uploads/2021/03/1280px-Metacritic_logo.svg-1.png"
							alt=""
						/>
						<div className="w-[84px]">
							<CircularProgressbar
								value={content.metaScore}
								text={`${content.metaScore}/100`}
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default GameDetail;
