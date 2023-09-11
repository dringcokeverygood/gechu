import React from 'react';
import { GameContent } from './containers/GameDetailContainer';

const GameDetail = ({ content }: { content: GameContent }) => {
	return (
		<div>
			<h1 className="text-green-500 text-3xl font-dungGeunMo">{content.gameTitle}</h1>
			<table className="border-solid border-2 border-blue-600 w-full">
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
				</tbody>
			</table>
		</div>
	);
};

export default GameDetail;
