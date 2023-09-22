import React, {
	useState,
	useCallback,
	useRef,
	ChangeEvent,
	KeyboardEvent,
} from 'react';
import SearchGameContainer from './SearchGameContainer';
import SearchArticleContainer from './SearchArticleContainer';
import SearchNewsContainer from './SearchNewsContainer';
import SearchResult from '../SearchResult';

const categories: string[] = ['게임', '게시글', '뉴스'];

const SearchResultContainer = () => {
	const searchWordRef = useRef<string>('');
	const [activeTab, setActiveTab] = useState<string>('게임');
	const [searchWord, setSearchWord] = useState<string>('');

	const onChangeSearchWord = useCallback((e: ChangeEvent<HTMLInputElement>) => {
		const value: string = e.target.value;
		searchWordRef.current = value;
		setSearchWord(searchWordRef.current);
	}, []);

	const handleSearch = () => {
		console.log('검색 :', searchWord);
		// 여기에서 검색 결과를 가져오는 로직을 추가
	};

	const onKeyUpForSearch = useCallback(
		(e: KeyboardEvent<HTMLInputElement>) => {
			if (e.key === 'Enter') {
				if (searchWord) {
					handleSearch();
				}
			}
		},
		[searchWord],
	);

	let content = null;

	if (activeTab === '게임') {
		content = <SearchGameContainer />;
	} else if (activeTab === '게시글') {
		content = <SearchArticleContainer />;
	} else if (activeTab === '뉴스') {
		content = <SearchNewsContainer />;
	}

	return (
		<SearchResult
			searchWord={searchWord}
			onChangeSearchWord={onChangeSearchWord}
			onKeyUpForSearch={onKeyUpForSearch}
			onClickSearchBtn={handleSearch}
			activeTab={activeTab}
			setActiveTab={setActiveTab}
			categories={categories}
			content={content}
		/>
	);
};

export default SearchResultContainer;
