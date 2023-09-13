import React from 'react'
import { GameTabItem } from './containers/GameTabsContainer';
import { Tab } from '@headlessui/react'
import GameReviewContainer from './containers/GameReviewContainer';

const GameTabs = ({ tabs }: { tabs: GameTabItem[] }) => {
  return (
    <div>
    {/* <ul className="text-white-200">
        {tabs.map((tab, idx)=>{return <li key={idx} className="float-left px-2 mt-2">{tab.tabTitle}</li>})}
    </ul> */}
    <Tab.Group>
    <Tab.List className="text-white-200 text-xl w-full">
      {tabs.map((tab, idx)=>{return <Tab key={idx} className="px-2 mt-2 border-solid border-2 rounded-md
        bg-gradient-to-r from-green-400 to-blue-600 font-dungGeunMo">{tab.tabTitle}</Tab>})}
    </Tab.List>
    <Tab.Panels className="text-white-200">
      <Tab.Panel><GameReviewContainer/></Tab.Panel>
      <Tab.Panel><div>게시글임</div></Tab.Panel>
      <Tab.Panel><div>게임뉴스임</div></Tab.Panel>
    </Tab.Panels>
  </Tab.Group>
  </div>
  )
}

export default GameTabs