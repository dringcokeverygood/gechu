import SideBarContainer from '../components/MyPage/containers/SideBarContainer';
import { Outlet } from 'react-router-dom';

const MyPage = () => {
	return (
		<div className="flex items-start">
			<SideBarContainer />
			<div className="flex w-full justify-center">
				<Outlet />
			</div>
		</div>
	);
};

export default MyPage;
