import React from 'react';
import { GameInfo } from './containers/GameDetailContainer';

const GameDetail = ({ content }: { content: GameInfo }) => {
	return (
		<div>
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
