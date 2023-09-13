import React from 'react'
import { GameReviewType } from './containers/GameReviewContainer'

const GameReview = ({ review }: { review: GameReviewType }) => {
  return (
    <div className="flex flex-col items-center text-white-200 bg-white-900 rounded-md py-4 px-6 space-y-4 mb-4">
        <div className="flex justify-between w-full items-center">
            <div className="flex flex-row items-center space-x-4">
                <img
                className="inline-block h-10 w-10 rounded-full ring-2 ring-red-600"
                src="https://images.unsplash.com/photo-1552944150-6dd1180e5999?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1925&q=80"
                alt=""
                />
                <div className="font-dungGeunMo text-xl">{review.userNickname}</div>
            </div>
            <div>{review.estimate}</div>
        </div>
        <div className="flex flex-row w-full justify-start">
            {review.content}
        </div>
    </div>
  )
}

export default GameReview