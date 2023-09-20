import SideBar from '../components/MyPage/components/SideBar';
import { Outlet } from 'react-router-dom';

const MyPage = () => {
	return (
		<div className="flex items-start">
			<SideBar />
			<div className="flex w-full justify-center">
				<Outlet />
			</div>
		</div>
	);
};

export default MyPage;
