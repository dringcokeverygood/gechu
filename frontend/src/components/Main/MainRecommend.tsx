import React from 'react';
import { GamePreviewType } from '../../typedef/Game/games.types';
import Slick from '../Common/Slick';

type TrendProps = {
	games: GamePreviewType[];
	onClickBtn: () => void;
	onClickGame: (url: string) => void;
};

const MainRecommend = ({ games, onClickBtn, onClickGame }: TrendProps) => {
	return (
		<div className="my-5 flex max-w-[1200px] flex-col items-center gap-4 text-white-100 ">
			{/* 헤더 */}
			<div className="flex items-start justify-center gap-24 self-stretch">
				<p className="h-12 flex-1 font-dungGeunMo text-[40px]">
					(유저) 님 추천 게임
				</p>
				<button
					onClick={onClickBtn}
					className="w-24 rounded-lg bg-yellow-400 p-3 font-dungGeunMo text-[20px] text-white-950"
				>
					더보기
				</button>
			</div>

			{/* 슬라이드 */}
			<Slick>
				{games.map((game) => (
					<div
						key={`recommend${game.seq}`}
						className=" flex w-1/4 items-center"
					>
						<div className="group flex w-full justify-center ">
							<img
								className="h-64 w-64 bg-white-950 object-cover object-center group-hover:opacity-50"
								src={game.gameTitleImageUrl}
								alt={game.gameTitle}
							/>
							<div className="text-white absolute flex h-full w-64 flex-col justify-between p-5 text-xl opacity-0 group-hover:opacity-100">
								<p
									className="mb-2 line-clamp-2 cursor-pointer border-y-2 border-solid bg-white-950 bg-opacity-40 py-2 font-dungGeunMo text-2xl hover:pb-1 hover:pt-3"
									onClick={() => onClickGame(`/game-detail/${game.seq}`)}
								>
									{game.gameTitle}
								</p>
								<div className="h-2/3  text-white-200">
									<p className="mt-5 font-dungGeunMo">장르 : {game.genres}</p>
									<p className="font-dungGeunMo ">플랫폼 : {game.platforms}</p>
								</div>
							</div>
						</div>
					</div>
				))}
			</Slick>
		</div>
	);
};

export default MainRecommend;
