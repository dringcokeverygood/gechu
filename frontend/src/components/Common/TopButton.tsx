import React from 'react';
import { MdKeyboardArrowUp } from 'react-icons/md';

const TopButton = () => {
	const scrollToTop = () => {
		window.scroll({
			top: 0,
			behavior: 'smooth',
		});
	};

	return (
		<button
			className="fixed bottom-8 right-8 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-green-700 text-white-100"
			onClick={scrollToTop}
			type="button"
		>
			<MdKeyboardArrowUp size={40} />
		</button>
	);
};

export default TopButton;
