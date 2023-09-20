import React from 'react';
import { images } from '../../constants/images';
import { Link, NavLink } from 'react-router-dom';
import { Popover, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { RiSearchLine } from 'react-icons/ri';

type Props = {
	isLogin: boolean;
	searchWord: string;
	searchWordRef: React.MutableRefObject<string>;
	onChangeSearchWord: (
		e: React.ChangeEvent<HTMLInputElement>,
		type: React.MutableRefObject<string>,
	) => void;
	onKeyUpForSearch: (e: React.KeyboardEvent<HTMLInputElement>) => void;
	onClickSearchBtn: () => void;
};

const Header = ({
	isLogin,
	searchWord,
	searchWordRef,
	onChangeSearchWord,
	onKeyUpForSearch,
	onClickSearchBtn,
}: Props) => {
	return (
		<div className="fixed left-0 top-0 z-50 flex h-20 w-full items-center justify-between bg-white-950 px-5 py-3 text-white-100">
			<Link to={`/`} className="flex items-center gap-5">
				<img src={images.logo} className="h-[50px] w-20" />
				<div className="font-dungGeunMo text-[40px]">gechu</div>
			</Link>
			<div className="flex items-center gap-8">
				<ul className="flex gap-6">
					<li>
						<NavLink
							to={'/game-recommend'}
							className="font-dungGeunMo text-[20px]"
						>
							RECOMMEND
						</NavLink>
					</li>
					<li>
						<NavLink to={'/game-list'} className="font-dungGeunMo text-[20px]">
							GAMES
						</NavLink>
					</li>
					<li>
						<NavLink to={'/game-news'} className="font-dungGeunMo text-[20px]">
							NEWS
						</NavLink>
					</li>
				</ul>
				<div className="flex rounded-md border-2 border-solid border-white-100 p-2">
					<input
						className="w-[180px] bg-white-950 font-dungGeunMo placeholder:text-white-300 "
						type="text"
						value={searchWord}
						onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
							onChangeSearchWord(e, searchWordRef)
						}
						onKeyUp={(e: React.KeyboardEvent<HTMLInputElement>) =>
							onKeyUpForSearch(e)
						}
						placeholder="SEARCH"
					/>
					<RiSearchLine size={20} onClick={onClickSearchBtn} />
				</div>
				{isLogin ? (
					<Popover className="relative">
						<Popover.Button className="outline-none">
							<img
								src={images.defaultProfile}
								className="h-[45px] w-[45px] rounded-full"
							/>
						</Popover.Button>
						<Transition
							as={Fragment}
							enter="transition ease-out duration-200"
							enterFrom="opacity-0 translate-y-1"
							enterTo="opacity-100 translate-y-0"
							leave="transition ease-in duration-150"
							leaveFrom="opacity-100 translate-y-0"
							leaveTo="opacity-0 translate-y-1"
						>
							<Popover.Panel className="absolute left-1/2 z-10 mr-5 mt-2 w-[150px] max-w-sm -translate-x-3/4 transform">
								<div className="ring-black overflow-hidden rounded-lg bg-white-100 shadow-lg ring-1 ring-opacity-5">
									<div className="flex items-center gap-2 p-4 text-white-950 ">
										<img
											src={images.defaultProfile}
											className="h-[45px] w-[45px] rounded-full"
										/>
										<div className="font-dungGeunMo">닉네임</div>
									</div>
									<div className="bg-gray-50 text-white-950">
										<ul className="flex flex-col">
											<li className="px-4 py-2 transition duration-150 ease-in-out hover:bg-white-200 ">
												<Popover.Button as={Link} to={`/my-page`}>
													<div className="font-dungGeunMo">내 정보</div>
												</Popover.Button>
											</li>
											<li className="px-4 py-2 transition duration-150 ease-in-out hover:bg-white-200 ">
												<Popover.Button
													as={Link}
													to={'/my-page/article-manage'}
												>
													<div className="font-dungGeunMo">내 게시물</div>
												</Popover.Button>
											</li>
											<li className="px-4 py-2 transition duration-150 ease-in-out hover:bg-white-200 ">
												<Popover.Button as={Link} to={'/my-page/review-manage'}>
													<div className="font-dungGeunMo">내 리뷰</div>
												</Popover.Button>
											</li>
											<li className="border-t-[1px] border-solid border-white-200 px-4 py-2 font-dungGeunMo text-red-700 transition duration-150 ease-in-out hover:bg-white-200">
												로그아웃
											</li>
										</ul>
									</div>
								</div>
							</Popover.Panel>
						</Transition>
					</Popover>
				) : (
					<div className="font-dungGeunMo text-[20px]">LOGIN</div>
				)}
			</div>
		</div>
	);
};

export default Header;
