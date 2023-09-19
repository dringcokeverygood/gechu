import React, { useEffect } from 'react';
import BArticleCardContainer from '../Common/containers/BArticleCardContainer';
import { GameArticlePreviewType } from '../../typedef/Game/games.types';

type ArticleCardProps = {
	articles: GameArticlePreviewType[];
};

const SearchArticle = ({ articles }: ArticleCardProps) => {
	useEffect(() => {
		return () => console.log('게시물 언마운트');
	}, []);

	return (
		<div>
			{/* <p>게시물 검색 api 호출 </p> */}

			<div className="flex w-[1200px] flex-col justify-center">
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
