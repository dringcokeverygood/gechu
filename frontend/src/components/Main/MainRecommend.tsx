import React from 'react';
import { GamePreviewType } from '../../typedef/Game/games.types';
import Slick from '../Common/Slick';
import { UserType } from '../../typedef/main.types';
import LoadingSlickCard from '../Common/LoadingSlickCard';

type TrendProps = {
	games: GamePreviewType[];
	onClickBtn: () => void;
	onClickGame: (url: string) => void;
	userInfo: UserType;
	isLogin: boolean;
	loading: boolean;
};

const MainRecommend = ({
	games,
	onClickBtn,
	onClickGame,
	userInfo,
	isLogin,
	loading,
}: TrendProps) => {
	const repeat = [1, 2, 3, 4];

	return (
		<div className="flex w-[1200px] flex-col items-center gap-5 sm:w-[600px] lg:w-[1200px] ">
			{isLogin ? (
				<>
					{/* 헤더 */}
					<div className="flex items-start justify-center gap-24 self-stretch">
						<p className="h-12 flex-1 font-dungGeunMo text-[40px]">
							{userInfo.userName}님 추천 게임
						</p>
						<button
							onClick={onClickBtn}
							className="w-24 rounded-lg bg-yellow-400 p-3 font-dungGeunMo text-[20px] text-white-950"
						>
							더보기
						</button>
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
								<div
									key={`recommend${game.seq}`}
									className=" flex w-1/4 items-center"
								>
									<div className="group flex w-full justify-center ">
										<img
											className="h-64 w-64 bg-white-950 object-contain object-center group-hover:opacity-50"
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
				</>
			) : (
				<>
					{/* 헤더 */}
					<div className="flex items-start justify-center gap-24 self-stretch">
						<p className="h-12 flex-1 font-dungGeunMo text-[40px]">추천 게임</p>
					</div>
					<div className="flex h-32 w-full items-center justify-center font-dungGeunMo text-3xl">
						로그인을 하시면 추천 게임을 제공받을 수 있습니다.
					</div>
				</>
			)}
		</div>
	);
};

export default MainRecommend;
