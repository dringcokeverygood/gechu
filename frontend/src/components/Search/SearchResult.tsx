import React, { ChangeEvent, KeyboardEvent } from 'react';
import { images } from '../../constants/images';

type SearchResultProps = {
	searchWord: string;
	onChangeSearchWord: (e: ChangeEvent<HTMLInputElement>) => void;
	onKeyUpForSearch: (e: KeyboardEvent<HTMLInputElement>) => void;
	onClickSearchBtn: () => void;
	activeTab: string;
	setActiveTab: (tab: string) => void;
	categories: string[];
	content: JSX.Element | null;
};

const SearchResult = ({
	searchWord,
	onChangeSearchWord,
	onKeyUpForSearch,
	onClickSearchBtn,
	activeTab,
	setActiveTab,
	categories,
	content,
}: SearchResultProps) => (
	<div className="mx-auto mt-12 flex min-h-fit w-[1200px] flex-col items-center justify-center">
		{/* 검색 바 */}
		<div className="flex h-12 w-full items-center text-white-950">
			<input
				type="text"
				className="h-full w-full rounded-l-lg border bg-white-100 p-2 font-dungGeunMo text-xl focus:outline-none"
				placeholder="SEARCH"
				value={searchWord}
				onChange={onChangeSearchWord}
				onKeyUp={onKeyUpForSearch}
			/>
			<button
				className="flex h-12 w-12 items-center justify-center rounded-r-lg bg-white-100 hover:bg-white-300"
				onClick={onClickSearchBtn}
			>
				<img src={images.search} alt="검색" />
			</button>
		</div>

		{/* 검색 결과 */}
		<div className="mt-4 w-full">
			<div onChange={(index) => console.log('선택 탭 변경: ', index)}>
				{/* 탭 버튼 */}
				<div className="flex ">
					{categories.map((category) => (
						<button
							key={category}
							className={`h-16 w-32 border-b border-solid font-dungGeunMo  text-2xl ${
								activeTab === category
									? ' border-b-red-700 text-white-100'
									: 'border-b-white-400 text-white-400 hover:p-6 '
							}`}
							onClick={() => {
								console.log('탭 클릭: ', category);
								setActiveTab(category);
							}}
						>
							{category}
						</button>
					))}
				</div>

				{/* 탭 내용 */}
				<div className="mt-2">{content}</div>
			</div>
		</div>
	</div>
);

export default SearchResult;
