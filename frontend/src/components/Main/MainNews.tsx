import React from 'react';
import { Tab } from '@headlessui/react';
import { GameNewsPreviewType } from '../../typedef/main.types';

function classNames(...classes: string[]) {
	return classes.filter(Boolean).join(' ');
}

type MainNewsProps = {
	newsList: GameNewsPreviewType[];
	onClickNewTab: (url: string) => void;
	onClickBtn: () => void;
};

const MainNews = ({ newsList, onClickNewTab, onClickBtn }: MainNewsProps) => {
	return (
		<div className="flex max-w-[1200px] flex-col items-center gap-5">
			{/* 헤더 */}
			<div className="flex items-start justify-center gap-24 self-stretch">
				<p className="h-12 flex-1 font-dungGeunMo text-[40px]">뉴스</p>
				<button
					onClick={onClickBtn}
					className="w-24 rounded-lg bg-yellow-400 p-3 font-dungGeunMo text-[20px] text-white-950"
				>
					더보기
				</button>
			</div>

			{/* 탭 */}
			<div className="flex w-full items-center justify-center p-3">
				<Tab.Group>
					<Tab.List className="flex w-1/2 flex-col items-start self-stretch">
						{newsList.map((news, index) => (
							<Tab
								key={index}
								className={({ selected }) =>
									classNames(
										'flex w-full flex-row font-dungGeunMo text-sm ',
										'ring-0 focus:outline-none',
										`${
											selected
												? 'bg-white-100 text-white-950'
												: 'hover:bg-yellow-400'
										} rounded-l-lg`,
									)
								}
							>
								<li key={index} className="item group flex p-2 ">
									<img
										className="h-20 w-20 object-cover"
										src={news.image_url}
										alt="기사 이미지"
									/>
									<div className="ml-2 flex h-20 flex-col items-start justify-between text-start">
										<p className="self-stretch text-[20px]">{news.headline}</p>
										<p>
											{news.upload_date} {news.company}
										</p>
									</div>
								</li>
							</Tab>
						))}
					</Tab.List>
					<Tab.Panels className="flex h-[384px] w-1/2 cursor-pointer flex-col items-center self-stretch rounded-r-lg bg-white-100 text-white-950">
						{newsList.map((news) => (
							<Tab.Panel
								className={
									'bg-white h-full w-full rounded-r-xl p-3 hover:bg-white-200'
								}
								onClick={() => onClickNewTab(news.url)}
							>
								<div className="">
									<p className="mb-5 line-clamp-1 h-6 overflow-hidden overflow-ellipsis text-start font-dungGeunMo text-2xl leading-7">
										{news.headline}
									</p>
									<img
										className="h-64 w-full object-cover"
										src={news.image_url}
										alt="뉴스 이미지"
									/>
									<p className="h-15 mt-2 line-clamp-2 overflow-ellipsis text-lg">
										{news.content}
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

export default MainNews;
