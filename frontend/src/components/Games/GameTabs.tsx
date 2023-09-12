import React from 'react'
import { GameTabItem } from './containers/GameTabsContainer';

const GameTabs = ({ tabs }: { tabs: GameTabItem[] }) => {
  return (
    <ul className="text-white-200">
        {tabs.map((tab)=>{return <li className="float-left px-2 mt-2">{tab.tabTitle}</li>})}
    </ul>
  )
}

export default GameTabs