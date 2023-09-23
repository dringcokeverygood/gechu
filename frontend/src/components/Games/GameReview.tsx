import React from 'react';
import { GameReviewType } from '../../typedef/Game/games.types';
import { MdThumbUp, MdThumbDown } from 'react-icons/md';

const GameReview = ({ review }: { review: GameReviewType }) => {
	const isGood = () => review.estimate === '좋아요';
	return (
		<div className="mb-4 flex flex-col items-center space-y-4 rounded-md bg-white-900 px-6 py-4 text-white-200">
			<div className="flex w-full items-center justify-between">
				<div className="flex flex-row items-center space-x-4">
					<img
						className="inline-block h-10 w-10 rounded-full ring-2 ring-red-600"
						src="https://images.unsplash.com/photo-1552944150-6dd1180e5999?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1925&q=80"
						alt=""
					/>
					<div className="font-dungGeunMo text-xl">{review.userNickname}</div>
				</div>
				<div className="flex flex-row items-center space-x-2">
					{isGood() ? (
						<MdThumbUp className="fill-blue-400" />
					) : (
						<MdThumbDown className="fill-red-400" />
					)}
					<div
						className={`font-dungGeunMo text-lg ${
							isGood() ? 'text-blue-400' : 'text-red-400'
						}`}
					>
						{review.estimate}
					</div>
				</div>
			</div>
			<div className="flex w-full flex-row justify-start">{review.content}</div>
		</div>
	);
};

export default GameReview;
