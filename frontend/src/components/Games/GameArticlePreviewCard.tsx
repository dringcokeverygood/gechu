import React from 'react'
import { GameArticlePreviewType } from './containers/GameArticleListContainer'

const GameArticlePreviewCard = ({article}: {article: GameArticlePreviewType}) => {
  return (
    <div className="flex flex-col h-[280px] text-white-200 bg-white-900 rounded-md py-2 px-2 space-y-2 mb-4">
      <img src={article.imageUrl} alt="article-thumbnail" 
        className="h-2/3 w-fit self-center"/>
        {/* <div className="flex justify-between w-full items-center">
            <div className="flex flex-row items-center space-x-4">
                <img
                className="inline-block h-10 w-10 rounded-full ring-2 ring-red-600"
                src="https://images.unsplash.com/photo-1552944150-6dd1180e5999?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1925&q=80"
                alt=""
                />
                <div className="font-dungGeunMo text-xl">{article.userNickname}</div>
            </div>
        </div> */}
        <div className="font-dungGeunMo text-xl">
            {article.content}
        </div>
    </div>
  )
}

export default GameArticlePreviewCard