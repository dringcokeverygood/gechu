import React from 'react';
import { useNavigate, Outlet } from 'react-router-dom';
import { GameTabItem } from './containers/GameTabsContainer';
import { Tab } from '@headlessui/react';
// import GameReviewContainer from './containers/GameReviewContainer';
// import GameArticleListContainer from './containers/GameArticleListContainer';

const GameTabs = ({ tabs }: { tabs: GameTabItem[] }) => {
	const navigate = useNavigate();
	return (
		<div>
			{/* <ul className="text-white-200">
        {tabs.map((tab, idx)=>{return <li key={idx} className="float-left px-2 mt-2">{tab.tabTitle}</li>})}
    </ul> */}
			<Tab.Group>
				<Tab.List className="w-full text-xl text-white-200">
					{tabs.map((tab, idx) => {
						return (
							<Tab
								key={idx}
								className="mt-2 rounded-t-md border-2 border-solid bg-gradient-to-r
        from-green-500 to-blue-600 px-2 font-dungGeunMo"
								onClick={() => navigate(tab.tabPath)}
							>
								{tab.tabTitle}
							</Tab>
						);
					})}
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
