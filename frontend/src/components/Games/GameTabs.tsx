import React from 'react';
import { Outlet } from 'react-router-dom';
import { GameTabItem } from './containers/GameTabsContainer';
import { Tab } from '@headlessui/react';
import { useLocation } from 'react-router-dom';

type GameTabsProps = {
	tabs: GameTabItem[];
	onClickTab: (url: string) => void;
};

const GameTabs = ({ tabs, onClickTab }: GameTabsProps) => {
	const { pathname } = useLocation();
	const currentTab = pathname.split('/').at(3); //reviews | articles | news
	return (
		<div className=" md:mx-32 lg:mx-36  xl:mx-40">
			<Tab.Group>
				<Tab.List className="sticky top-20 z-20 flex flex-row bg-white-950">
					{tabs.map((tab, idx) => {
						return (
							<Tab
								key={idx}
								className={` h-16 w-32  border-solid font-dungGeunMo text-xl focus:outline-none ${
									currentTab === tab.tabPath
										? 'border-t-[3px] border-t-red-700 text-white-200'
										: 'border-t border-t-white-400 text-white-400'
								}`}
								onClick={() => onClickTab(tab.tabPath)}
							>
								{tab.tabTitle}
							</Tab>
						);
					})}
					<button className="w-fill pointer-events-none h-16 flex-1 border-t border-solid border-t-white-400 focus:outline-none" />
				</Tab.List>
				<Tab.Panels className="pb-2 text-white-200">
					<Outlet />
				</Tab.Panels>
			</Tab.Group>
		</div>
	);
};

export default GameTabs;
