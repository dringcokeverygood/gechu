import LikeUnlikeModal from '../components/LikeUnlikeModal';

const LikeUnlikeModalContainer = ({
	onClick,
}: {
	onClick: (e: React.MouseEvent) => void;
}) => {
	return (
		<div>
			<LikeUnlikeModal onClick={onClick} />
		</div>
	);
};

export default LikeUnlikeModalContainer;
