import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { CircularProgressbar } from 'react-circular-progressbar';
// eslint-disable-next-line import/no-extraneous-dependencies
import 'react-circular-progressbar/dist/styles.css';
import { GameInfoType } from '../../typedef/Game/games.types';
import dateFormatting from '../../utils/dateFormatting';

const GameDetail = ({ content }: { content: GameInfoType }) => {
	return (
		<div className="flex flex-col md:mx-32 lg:mx-36 xl:mx-40">
			<div className="flex flex-row items-center justify-between">
				<div className="flex flex-row space-x-4">
					<img
						src={content.gameTitleImageUrl}
						alt="game-title-image"
						className="max-w-60 max-h-80"
					></img>
					<div>
						<h1 className="py-5 font-dungGeunMo text-4xl text-white-200">
							{content.gameTitle}
						</h1>
						<div className="flex flex-row gap-2 pb-6 text-xl text-white-200">
							<div className="flex w-36 flex-col space-y-1">
								<p>개발</p>
								<p>퍼블리싱</p>
								<p>발매일</p>
								<p>플랫폼</p>
								<p>장르</p>
							</div>
							<div className="flex w-full flex-col  space-y-1">
								<div className="flex w-full flex-col  space-y-1">
									<p className="whitespace-pre-wrap">
										{content.develop || '-'}
									</p>
									<p className="whitespace-pre-wrap">
										{content.publish || '-'}
									</p>
									<p className="whitespace-pre-wrap">
										{content.createDate
											? dateFormatting(content.createDate)
											: '-'}
									</p>
									<p className="whitespace-pre-wrap">
										{content.platforms.length > 0
											? content.platforms.join(', ')
											: '-'}
									</p>
									<p className="whitespace-pre-wrap">
										{content.genres.length > 0
											? content.genres.join(', ')
											: '-'}
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="mt-4 flex flex-row">
					<div className="flex flex-col items-center space-y-2 px-4">
						<img
							className="max-h-10"
							src="https://11bitstudios.com/wp-content/uploads/2021/03/1280px-Metacritic_logo.svg-1.png"
							alt=""
						/>
						<div className="w-[120px] font-dungGeunMo">
							<CircularProgressbar
								value={content.metaScore}
								text={
									content.metaScore > 0 ? `${content.metaScore}/100` : `Unrated`
								}
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default GameDetail;
