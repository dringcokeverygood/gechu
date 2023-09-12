import React from 'react';
import { images } from '../../constants/images';
// import { NavLink } from 'react-router-dom';

type Props = {
	searchWord: string;
	searchWordRef: React.MutableRefObject<string>;
	onChangeSearchWord: (
		e: React.ChangeEvent<HTMLInputElement>,
		type: React.MutableRefObject<string>,
	) => void;
	onSearch: (e: React.KeyboardEvent<HTMLInputElement>) => void;
};

const Header = ({
	searchWord,
	searchWordRef,
	onChangeSearchWord,
	onSearch,
}: Props) => {
	console.log('render');
	return (
		<div className="flex w-full items-center justify-between bg-white-950 px-5 py-3 text-white-100">
			<div className="flex items-center gap-5">
				<img src={images.logo} className="h-[50px] w-20" />
				<div className="font-dungGeunMo text-[40px]">gechu</div>
			</div>
			<div className="flex items-center gap-8">
				<ul className="flex gap-6">
					<li className="font-dungGeunMo text-[20px]">RECOMMEND</li>
					<li className="font-dungGeunMo text-[20px]">GAMES</li>
					<li className="font-dungGeunMo text-[20px]">NEWS</li>
				</ul>
				<div className="flex rounded-md border-2 border-solid border-white-100 p-2">
					<input
						className="bg-white-950 font-dungGeunMo placeholder:text-white-300"
						type="text"
						value={searchWord}
						onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
							onChangeSearchWord(e, searchWordRef)
						}
						onKeyUp={(e: React.KeyboardEvent<HTMLInputElement>) => onSearch(e)}
						placeholder="SEARCH"
					/>
					<img src={images.search} />
				</div>
			</div>
		</div>
	);
};

export default Header;
