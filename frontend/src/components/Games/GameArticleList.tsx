import React from 'react';
import { Link } from 'react-router-dom';
import { GameArticlePreviewType } from '../../typedef/Game/games.types';
import GameArticlePreviewCard from './GameArticlePreviewCard';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Icon } from '@iconify/react';
import ArticleModal from './components/ArticleModal';

type Props = {
	articles: GameArticlePreviewType[];
	modalFlag: boolean;
	onChangeModalFlag: () => void;
};

const GameArticleList = ({ articles, onChangeModalFlag, modalFlag }: Props) => {
	return (
		<div className="flex flex-col">
			<div className="flex flex-row items-center justify-start space-x-4 px-4 text-xl">
				<div className="font-dungGeunMo">{articles.length}건</div>
				<button onClick={onChangeModalFlag}>
					<Icon icon="pixelarticons:edit-box" />
				</button>
			</div>
			<div className="mt-4 grid grid-cols-4 gap-4">
				{articles.map((article) => {
					return (
						<Link to={`${article.seq}`} key={article.seq}>
							<GameArticlePreviewCard article={article} />
						</Link>
					);
				})}
			</div>

			{/* 모달창 */}
			{modalFlag && <ArticleModal onChangeModalFlag={onChangeModalFlag} />}
		</div>
	);
};

export default GameArticleList;
