import React from 'react'
import { GameArticlePreviewType } from './containers/GameArticleListContainer'
import GameArticlePreviewCard from './GameArticlePreviewCard'

const GameArticleList = ({articles}: { articles: GameArticlePreviewType[] }) => {
  return (
    <div className="grid grid-cols-4 gap-4">
    {articles.map((article)=>{
        return <GameArticlePreviewCard key={article.seq} article={article}/>
    })}
</div>
  )
}

export default GameArticleList