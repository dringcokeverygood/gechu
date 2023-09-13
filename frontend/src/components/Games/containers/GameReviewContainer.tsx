import React from 'react'
import GameReview from '../GameReview'

export type GameReviewInfo = {
    gameSeq: number;
	gameTitle: string;
    userSeq: number;
    userNickname: string;
    reviewSeq: number;
    estimate: string;
	content: string;
};

const GameReviewContainer = () => {
    const reviews: GameReviewInfo[]=[
        {
            gameSeq: 1,
            gameTitle: '게임이름',
            userSeq: 1,
            userNickname: '재밌으면 우는 애옹이',
            reviewSeq: 1,
            estimate: '좋아요',
            content: '애옹~',
        },
        {
            gameSeq: 1,
            gameTitle: '게임이름',
            userSeq: 1,
            userNickname: '재밌으면 우는 애옹이',
            reviewSeq: 1,
            estimate: '싫어요',
            content: '멍멍으르렁왈왈',
        }
    ];
    return (
        <div>
            {reviews.map((review, idx)=>{
                return <GameReview key={idx} content={review}/>
            })}
        </div>
    )
}

export default GameReviewContainer