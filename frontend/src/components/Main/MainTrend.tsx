import React from 'react';
import { GamePreviewType } from '../../typedef/Game/games.types';
import Slick from '../Common/Slick';

type TrendProps = {
	games: GamePreviewType[];
	onClickGame: (url: string) => void;
};

const MainTrend = ({ games, onClickGame }: TrendProps) => {
	return (
		<div className="flex max-w-[1200px] flex-col items-center gap-5">
			{/* 헤더 */}
			<div className="flex items-start justify-center gap-24 self-stretch">
				<p className="h-12 flex-1 font-dungGeunMo text-[40px]">
					현재 유행 게임
				</p>
			</div>

			{/* 슬라이드 */}
			<Slick>
				{games.map((game) => (
					<div
						key={`trend${game.gameSeq}`}
						className="flex  w-72 py-3"
						onClick={() => onClickGame(`/game-detail/${game.gameSeq}`)}
					>
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

export default MainTrend;
