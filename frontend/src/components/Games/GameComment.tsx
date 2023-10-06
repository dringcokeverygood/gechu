import React, { Fragment } from 'react';
import { GameCommentType } from '../../typedef/Game/games.types';
import { Menu, Transition } from '@headlessui/react';
import UserProfileItem from '../Common/UserProfileItem';
import { MdClose, MdMoreVert } from 'react-icons/md';

const GameComment = ({
	comment,
	isMine,
	onClickDeleteBtn,
}: {
	comment: GameCommentType;
	isMine: boolean;
	onClickDeleteBtn: (seq: number) => void;
}) => {
	return (
		<div className="flex flex-col space-y-2 px-2 py-2 text-white-200">
			<div className="flex flex-row items-center justify-between space-x-4">
				<UserProfileItem
					profile={comment.userProfile}
					size="small"
					date={comment.createDate}
				/>
				{isMine && (
					<Menu as="div" className="relative inline-block text-left ">
						<div>
							<Menu.Button className="cursor-pointer rounded-full transition duration-100 ease-out hover:bg-white-700">
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
							<Menu.Items className="absolute right-0 mt-2 w-[130px] rounded-md bg-white-950 shadow-md">
								<div className="flex flex-col">
									<Menu.Item>
										{({ active }) => (
											<div
												className={`${
													active && 'bg-white-800'
												} flex cursor-pointer items-center justify-center gap-4  rounded-b-md p-2 font-dungGeunMo`}
												onClick={() => {
													onClickDeleteBtn(comment.seq);
												}}
											>
												<MdClose size={20} />
												삭제
											</div>
										)}
									</Menu.Item>
								</div>
							</Menu.Items>
						</Transition>
					</Menu>
				)}
			</div>
			<div className="px-1 py-2">{comment.content}</div>
		</div>
	);
};

export default GameComment;
