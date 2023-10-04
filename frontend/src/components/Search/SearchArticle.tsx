import React from 'react';
import BArticleCardContainer from '../Common/containers/BArticleCardContainer';
import { GameArticlePreviewType } from '../../typedef/Game/games.types';

type ArticleCardProps = {
	articles: GameArticlePreviewType[];
};

const SearchArticle = ({ articles }: ArticleCardProps) => {
	return (
		<div>
			{/* <p>게시물 검색 api 호출 </p> */}

			<div className="flex w-[600px]  flex-col justify-center  sm:w-[600px] lg:w-[1200px]">
				<div className="flex flex-wrap content-start items-start justify-start gap-6 self-stretch pb-10 ">
					{articles.map((article) => (
						<BArticleCardContainer key={article.seq} article={article} />
					))}
				</div>
			</div>
		</div>
	);
};

export default SearchArticle;
