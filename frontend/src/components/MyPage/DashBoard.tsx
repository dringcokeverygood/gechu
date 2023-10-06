import React from 'react';
import { DashBoardType } from '../../typedef/MyPage/myPage.types';
import LikeGameItem from './components/LikeGameItem';
import LikeDislikeModalContainer from './containers/LikeDislikeModalContainer';
import { images } from '../../constants/images';

const DashBoard = ({ content }: { content: DashBoardType }) => {
	return (
		<div className="mt-[100px] flex w-[1000px] flex-col gap-8 text-white-100">
			<div className="flex items-center justify-between">
				<div className="flex flex-col gap-3">
					<p className="font-dungGeunMo text-[32px]">선호 게임</p>
					<p className="font-dungGeunMo text-[16px] text-white-300">
						선택한 선호 게임을 기반으로 게임 추천이 이루어집니다.
					</p>
				</div>
				{/* <button
					className="h-10 rounded-xl bg-yellow-400 px-3 py-2 font-dungGeunMo text-[16px] text-white-950"
					onClick={content.onClick}
				>
					선호 게임 설정
				</button> */}
			</div>

			{content.LikeGames.length > 0 ? (
				<div className="h-max-[500px] grid w-full grid-cols-5 justify-items-center overflow-auto rounded-3xl bg-white-100 px-7 pb-9">
					{content.LikeGames.map((game) => (
						<LikeGameItem key={game.gameSeq} game={game} />
					))}
				</div>
			) : (
				<div className="flex w-full flex-col items-center justify-center rounded-3xl bg-white-200 px-7 py-9">
					<img src={images.sadGechuBlack} />
					<p className="font-dungGeunMo text-[24px] text-white-950">
						선호 게임이 없습니다.
					</p>
				</div>
			)}

			{content.modalFlag && (
				<LikeDislikeModalContainer onClick={content.onClick} />
			)}
		</div>
	);
};

export default DashBoard;
