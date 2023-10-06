import React from 'react';
import BArticleCardContainer from '../Common/containers/BArticleCardContainer';
import { GameArticlePreviewType } from '../../typedef/Game/games.types';
import BLoadingCard from '../Common/BLoadingCard';
import SearchNone from './SearchNone';

type ArticleCardProps = {
	articles: GameArticlePreviewType[];
	loading: boolean;
};

const SearchArticle = ({ articles, loading }: ArticleCardProps) => {
	const repeat = [1, 2, 3, 4, 5, 6, 7, 8];
	return (
		<div>
			{/* <p>게시물 검색 api 호출 </p> */}

			<div className="flex w-[600px]  flex-col justify-center  sm:w-[600px] lg:w-[1200px]">
				{loading ? (
					<div className="flex flex-wrap content-start items-start justify-start gap-6 self-stretch pb-10 ">
						{repeat.map((i) => (
							<BLoadingCard key={'loading' + i} />
						))}
					</div>
				) : articles.length > 0 ? (
					<div className="flex flex-wrap content-start items-start justify-start gap-6 self-stretch pb-10 ">
						{articles.map((article) => (
							<BArticleCardContainer key={article.seq} article={article} />
						))}
					</div>
				) : (
					<SearchNone />
				)}
			</div>
		</div>
	);
};

export default SearchArticle;
