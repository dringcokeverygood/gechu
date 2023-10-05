import React from 'react';
import { GameCommentType } from '../../typedef/Game/games.types';
import GameCommentContainer from './containers/GameCommentContainer';

type Props = {
	comments: GameCommentType[];
	commentText: string;
	onTextChange: (content: string) => void;
	onSubmit: () => void;
	fetchComments: () => void;
};

const GameCommentList = ({
	comments,
	commentText,
	onTextChange,
	onSubmit,
	fetchComments,
}: Props) => {
	return (
		<div className="flex flex-col">
			{/* 댓글 */}
			<div className="mb-2 font-dungGeunMo">댓글 {comments.length}개</div>

			{/* 댓글 입력폼 */}
			<form
				onSubmit={(e) => {
					e.preventDefault();
					onSubmit();
				}}
			>
				<div className="flex space-x-4">
					<textarea
						placeholder="댓글을 입력하세요."
						value={commentText}
						onChange={(e) => onTextChange(e.target.value)}
						onKeyDown={(e) => {
							if (e.key === 'Enter' && !e.shiftKey) {
								e.preventDefault();
								onSubmit();
							}
						}}
						className="h-[80px] flex-1 resize-none rounded-md bg-white-200 p-2 text-white-950 outline-none hover:bg-white-100"
					/>
					<button
						type="submit"
						className="text-white flex w-[100px] items-center justify-center rounded-md bg-blue-500 p-2 font-dungGeunMo text-xl"
					>
						{/* <MdSend size={32} /> */}
						등록
					</button>
				</div>
			</form>
			<div className="rounded-lg bg-white-950">
				{comments.map((comment) => {
					return (
						<GameCommentContainer
							key={comment.seq}
							comment={comment}
							fetchComments={fetchComments}
						/>
					);
				})}
			</div>
		</div>
	);
};

export default GameCommentList;
