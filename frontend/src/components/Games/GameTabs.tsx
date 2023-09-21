import React from 'react';
import { useNavigate, Outlet } from 'react-router-dom';
import { GameTabItem } from './containers/GameTabsContainer';
import { Tab } from '@headlessui/react';
import { useLocation } from 'react-router-dom';
// import GameReviewContainer from './containers/GameReviewContainer';
// import GameArticleListContainer from './containers/GameArticleListContainer';

const GameTabs = ({ tabs }: { tabs: GameTabItem[] }) => {
	const navigate = useNavigate();
	const { pathname } = useLocation();
	const currentTab = pathname.split('/').at(3); //reviews | articles | news
	return (
		<div className="md:mx-32 lg:mx-36 xl:mx-40">
			<Tab.Group>
				<Tab.List className="flex flex-row">
					{tabs.map((tab, idx) => {
						return (
							<Tab
								key={idx}
								// className="mt-2 rounded-t-md border-2 border-solid bg-gradient-to-r
								// from-green-500 to-blue-600 px-2 font-dungGeunMo"
								className={`h-16 w-32 border-t border-solid font-dungGeunMo text-xl focus:outline-none ${
									currentTab === tab.tabPath
										? 'border-t-red-700 text-white-200'
										: 'border-t-white-400 text-white-400'
								}`}
								onClick={() => navigate(tab.tabPath)}
							>
								{tab.tabTitle}
							</Tab>
						);
					})}
					<button className="w-fill h-16 flex-1 cursor-default border-t border-solid border-t-white-400 focus:outline-none">
						&nbsp;
					</button>
				</Tab.List>
				<Tab.Panels className="text-white-200">
					<Outlet />
					{/* <Tab.Panel>
						<GameReviewContainer />
					</Tab.Panel>
					<Tab.Panel>
						<GameArticleListContainer />
					</Tab.Panel>
					<Tab.Panel>
						<div>게임뉴스임</div>
					</Tab.Panel> */}
				</Tab.Panels>
			</Tab.Group>
		</div>
	);
};

export default GameTabs;
