import GameListContainer from '../components/Game/containers/GameListContainer';

const GameListPage = () => {
	return (
		<div className="flex flex-col items-center justify-center">
			<div className="mt-[100px] font-dungGeunMo text-[64px] text-white-100">
				게임 목록
			</div>
			<GameListContainer />
		</div>
	);
};

export default GameListPage;
