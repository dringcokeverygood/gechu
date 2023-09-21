import React from 'react';
import { GamePreviewType } from '../../typedef/Game/games.types';
import Slick from '../Common/Slick';

type TrendProps = {
	games: GamePreviewType[];
	onClickBtn: () => void;
};

const MainRecommend = ({ games, onClickBtn }: TrendProps) => {
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
					<div key={`recommend${game.gameSeq}`} className="flex  w-72 py-3">
						<div className="group flex justify-center">
							<img
								className="h-64 w-64  object-cover object-center group-hover:opacity-40"
								src={game.gameTitleImageUrl}
								alt={game.gameTitle}
							/>
							<div className="text-white absolute flex h-64 w-64 flex-col justify-start p-4 text-xl opacity-0 group-hover:opacity-100">
								<p>{game.gameTitle}</p>
								<p>{game.genre}</p>
								<p>{game.platform}</p>
							</div>
						</div>
					</div>
				))}
			</Slick>
		</div>
	);
};

export default MainRecommend;
