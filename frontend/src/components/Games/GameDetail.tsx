import React from 'react';
import { GameInfo } from './containers/GameDetailContainer';

const GameDetail = ({ content }: { content: GameInfo }) => {
	return (
		<div>
			<div className="h-40 w-full bg-white-800 flex justify-center">
				<img src="https://images.unsplash.com/photo-1533282960533-51328aa49826?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1842&q=80" 
				alt="game-title-image" className="h-fill" />
			</div>
			<h1 className="text-white-200 text-3xl font-dungGeunMo">{content.gameTitle}</h1>
			<table className="border-solid border-2 border-blue-600 w-full text-white-200 text-sm">
				<tbody>
					<tr>
						<td >개발</td>
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
