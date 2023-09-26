import React from 'react';
import { Tab } from '@headlessui/react';
import { GameArticlePreviewType } from '../../typedef/Game/games.types';

function classNames(...classes: string[]) {
	return classes.filter(Boolean).join(' ');
}

type MainNewsProps = {
	articleList: GameArticlePreviewType[];
	onClickArticle: (url: string) => void;
};

const MainArticle = ({ articleList, onClickArticle }: MainNewsProps) => {
	return (
		<div className="flex max-w-[1200px] flex-col items-center gap-5">
			{/* 헤더 */}
			<div className="flex items-start justify-center gap-24 self-stretch">
				<p className="h-12 flex-1 font-dungGeunMo text-[40px]">게시글</p>
			</div>

			{/* 탭 */}
			<div className="flex w-full items-center justify-center p-3">
				<Tab.Group>
					<Tab.List className="flex w-1/2 flex-col items-start self-stretch">
						{articleList.map((article) => (
							<Tab
								key={`articleTab${article.seq}`}
								className={({ selected }) =>
									classNames(
										'flex w-full flex-row font-dungGeunMo text-sm ',
										'ring-0 focus:outline-none',
										`${
											selected
												? 'cursor-default bg-white-100 text-white-950'
												: 'hover:bg-yellow-400'
										} rounded-l-lg`,
									)
								}
							>
								<li
									key={`article${article.seq}`}
									className="item group flex p-2 "
								>
									<img
										className="h-20 w-20 object-cover"
										src={article.imageUrl}
										alt="게시물 이미지"
									/>
									<div className="ml-2 flex flex-col items-start justify-between text-start">
										<p className="self-stretch text-[20px]">
											{article.articleTitle}
										</p>
										<div>
											<p>{article.gameTitle}</p>
											<p>
												{article.createDate} {article.userNickname}
											</p>
										</div>
									</div>
								</li>
							</Tab>
						))}
					</Tab.List>
					<Tab.Panels className="flex h-[384px] w-1/2 cursor-pointer flex-col items-center self-stretch rounded-r-lg bg-white-100 text-white-950">
						{articleList.map((article) => (
							<Tab.Panel
								className={classNames(
									'bg-white h-full w-full rounded-r-xl p-3 hover:bg-white-200',
								)}
								onClick={() =>
									onClickArticle(
										`/game-detail/${article.gameSeq}/articles/${article.seq}`,
									)
								}
							>
								<div className="">
									<p className="mb-5 line-clamp-1 h-6 overflow-hidden overflow-ellipsis text-start font-dungGeunMo text-2xl leading-7">
										{article.articleTitle}
									</p>
									<img
										className="h-64 w-full object-cover"
										src={article.imageUrl}
										alt="게시물 이미지"
									/>
									<p className="h-15 mt-2 line-clamp-2 overflow-ellipsis text-lg">
										{article.content}
									</p>
								</div>
							</Tab.Panel>
						))}
					</Tab.Panels>
				</Tab.Group>
			</div>
		</div>
	);
};

export default MainArticle;
