import React from 'react';
import { GamePreviewType } from '../../typedef/Game/games.types';
import Slick from '../Common/Slick';
import LoadingSlickCard from '../Common/LoadingSlickCard';

type TrendProps = {
	games: GamePreviewType[];
	onClickGame: (url: string) => void;
	loading: boolean;
};

const MainTrend = ({ games, onClickGame, loading }: TrendProps) => {
	const repeat = [1, 2, 3, 4];
	return (
		<div className="flex flex-col items-center gap-5 sm:w-[600px] lg:w-[1200px] ">
			{/* 헤더 */}
			<div className="flex items-start justify-center gap-24 self-stretch ">
				<p className="h-12 flex-1 font-dungGeunMo text-[40px]">
					현재 유행 게임
				</p>
			</div>

			{/* 슬라이드 */}
			{loading ? (
				<div className="grid grid-cols-4 gap-10">
					{repeat.map((i) => {
						return <LoadingSlickCard key={'loading' + i} />;
					})}
				</div>
			) : (
				<Slick>
					{games.map((game) => (
						<div key={`trend${game.seq}`} className=" flex w-1/4 items-center">
							<div className="group flex w-full justify-center ">
								<img
									className="h-64 w-64 bg-white-950 object-cover object-center group-hover:opacity-50"
									src={game.gameTitleImageUrl}
									alt={game.gameTitle}
								/>
								<div
									className="text-white absolute flex h-full w-64 cursor-pointer flex-col justify-between break-words p-5 text-xl leading-6 opacity-0 group-hover:opacity-100"
									onClick={() => onClickGame(`/game-detail/${game.seq}`)}
								>
									<p className="mb-2 line-clamp-2 border-y-2 border-solid bg-white-950 bg-opacity-40 py-2 font-dungGeunMo text-2xl ">
										{game.gameTitle}
									</p>
									<div className="h-3/5  text-white-200">
										<p className="mt-5 line-clamp-2 font-dungGeunMo ">
											장르 : {game.genres}
										</p>
										<p className="mt-3 line-clamp-2 break-all font-dungGeunMo">
											플랫폼 : {game.platforms}
										</p>
									</div>
								</div>
							</div>
						</div>
					))}
				</Slick>
			)}
		</div>
	);
};

export default MainTrend;
