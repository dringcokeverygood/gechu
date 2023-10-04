import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
	const { pathname } = useLocation();

	useEffect(() => {
		if (pathname.startsWith('/game-detail')) {
			window.scrollTo({ top: 320, left: 0, behavior: 'smooth' });
		} else {
			window.scrollTo(0, 0);
		}
	}, [pathname]);

	return null;
}
