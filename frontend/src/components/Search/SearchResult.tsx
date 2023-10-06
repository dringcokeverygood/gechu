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
			<div>
				{/* 탭 버튼 */}
				<div className="flex ">
					{categories.map((category) => (
						<button
							key={category}
							className={`h-16 w-32  border-solid font-dungGeunMo  text-2xl ${
								activeTab === category
									? ' border-b-[3px] border-b-red-700 text-white-100'
									: 'border-b border-b-white-400 text-white-400 hover:p-6 '
							}`}
							onClick={() => {
								setActiveTab(category);
							}}
						>
							{category}
						</button>
					))}
					<button className="pointer-events-none h-16 flex-1 border-b border-solid border-b-white-400"></button>
				</div>

				{/* 탭 내용 */}
				<div className="my-16">{content}</div>
			</div>
		</div>
	</div>
);

export default SearchResult;
