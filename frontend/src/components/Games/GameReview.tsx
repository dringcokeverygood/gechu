import React, { Fragment } from 'react';
import { GameReviewType } from '../../typedef/Game/games.types';
import {
	MdThumbUp,
	MdThumbDown,
	MdClose,
	MdModeEdit,
	MdMoreVert,
} from 'react-icons/md';
import { Menu, Transition } from '@headlessui/react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Link } from 'react-router-dom';

const GameReview = ({ review }: { review: GameReviewType }) => {
	const isGood = () => review.estimate === '좋아요';
	return (
		<div className="mb-4 flex flex-col items-center space-y-4 rounded-md bg-white-900 px-6 py-4 text-white-200">
			<div className="flex w-full items-center justify-between">
				<div className="flex w-full flex-row items-center space-x-4">
					<img
						className="inline-block h-10 w-10 rounded-full ring-2 ring-red-600"
						src="https://images.unsplash.com/photo-1552944150-6dd1180e5999?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1925&q=80"
						alt=""
					/>
					<div className="flex-1 font-dungGeunMo text-xl">
						{review.userNickname}
					</div>
				</div>
				<div className="flex w-32 flex-row items-center space-x-2">
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

				{/* 유저=작성자면 보이도록 */}
				<Menu as="div" className="relative inline-block text-left">
					<div>
						<Menu.Button className="rounded-full transition duration-100 ease-out hover:bg-white-700">
							<MdMoreVert size={28} />
						</Menu.Button>
					</div>
					<Transition
						as={Fragment}
						enter="transition ease-out duration-100"
						enterFrom="transform opacity-0 scale-95"
						enterTo="transform opacity-100 scale-100"
						leave="transition ease-in duration-75"
						leaveFrom="transform opacity-100 scale-100"
						leaveTo="transform opacity-0 scale-95"
					>
						<Menu.Items className="absolute right-0 mt-2 w-[130px] rounded-md  bg-white-950 shadow-md">
							<div className="flex flex-col">
								<Menu.Item>
									{({ active }) => (
										<Link
											className={`${
												active && 'bg-white-800'
											} flex items-center justify-center gap-4 rounded-t-md p-2 font-dungGeunMo`}
											to="/"
										>
											<MdModeEdit size={20} />
											수정
										</Link>
									)}
								</Menu.Item>
								<Menu.Item>
									{({ active }) => (
										<Link
											className={`${
												active && 'bg-white-800'
											} flex items-center justify-center gap-4 rounded-b-md  p-2 font-dungGeunMo`}
											to="/"
										>
											<MdClose size={20} />
											삭제
										</Link>
									)}
								</Menu.Item>
							</div>
						</Menu.Items>
					</Transition>
				</Menu>
			</div>
			<div className="flex w-full flex-row justify-start">{review.content}</div>
		</div>
	);
};

export default GameReview;
