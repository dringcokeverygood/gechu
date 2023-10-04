import React, {
	useState,
	useCallback,
	useRef,
	ChangeEvent,
	KeyboardEvent,
	useEffect,
} from 'react';
import SearchGameContainer from './SearchGameContainer';
import SearchArticleContainer from './SearchArticleContainer';
import SearchNewsContainer from './SearchNewsContainer';
import SearchResult from '../SearchResult';
import { SearchWordAtom } from '../../../recoil/SearchWordAtom';
import { useRecoilState } from 'recoil';
import { http } from '../../../utils/http';
import { GamePreviewType } from '../../../typedef/Game/games.types';
import { useNavigate } from 'react-router-dom';

const categories: string[] = ['게임', '게시글', '뉴스'];

const SearchResultContainer = () => {
	const searchWordRef = useRef<string>('');
	const [activeTab, setActiveTab] = useState<string>('게임');
	const [searchWord, setSearchWord] = useState<string>('');
	const [recoilSearchWord, setRecoilSearchWord] =
		useRecoilState(SearchWordAtom);

	const [searchGames, setSearchGames] = useState<GamePreviewType[]>([]);
	const [loading, setLoading] = useState(false);

	const navigate = useNavigate();

	const onChangeSearchWord = useCallback((e: ChangeEvent<HTMLInputElement>) => {
		const value: string = e.target.value;
		searchWordRef.current = value;
		setSearchWord(searchWordRef.current);
	}, []);

	const handleSearch = () => {
		console.log('검색 :', searchWord);
		setRecoilSearchWord(searchWord);
		navigate('/search');
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

	useEffect(() => {
		// 검색한 검색어를 받아옴
		setSearchWord(recoilSearchWord);
		setLoading(true);
		http
			.get<{ games: GamePreviewType[]; success: boolean }>(
				`web/elasticsearch?searchWord=${recoilSearchWord}`,
			)
			.then((data) => {
				const { games } = data;
				console.log(games);
				if (games !== undefined) {
					setSearchGames(games);
				}
				setLoading(false);
			});
	}, [recoilSearchWord]);

	let content = null;

	if (activeTab === '게임') {
		content = (
			<SearchGameContainer loading={loading} searchGames={searchGames} />
		);
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
