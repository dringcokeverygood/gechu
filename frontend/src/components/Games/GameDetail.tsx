import React from 'react';
import { GameInfoType } from '../../typedef/Game/games.types';

const GameDetail = ({ content }: { content: GameInfoType }) => {
	return (
		<div className="flex flex-col md:mx-32 lg:mx-36 xl:mx-40">
			<img
				src="https://images.unsplash.com/photo-1533282960533-51328aa49826?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1842&q=80"
				alt="game-title-image"
				className="h-48 w-full"
			></img>
			{/* <img
				src="https://images.unsplash.com/photo-1533282960533-51328aa49826?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1842&q=80"
				alt="game-title-image"
				className="h-40"
			></img> */}
			<h1 className="font-dungGeunMo text-3xl text-white-200">
				{content.gameTitle}
			</h1>
			<table className="w-full text-sm text-white-200">
				<tbody>
					<tr>
						<td>개발</td>
						<td>{content.develop}</td>
					</tr>
					<tr>
						<td>퍼블리싱</td>
						<td>{content.publish}</td>
					</tr>
					<tr>
						<td>메타스코어</td>
						<td>{content.metaScore}</td>
					</tr>
					<tr>
						<td>오픈스코어</td>
						<td>{content.openScore}</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
};

export default GameDetail;
