import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Icon } from '@iconify/react';
import SelectGameItemContainer from '../../MyPage/containers/EstimatedGameItemContainer';

type Props = {
	onChangeModalFlag: () => void;
};

const ArticleModal = ({ onChangeModalFlag }: Props) => {
	return (
		<div className="fixed left-0 top-0 z-50 flex h-full w-full  text-white-950">
			<div className="h-full w-full bg-white-950 bg-opacity-50 "></div>
			<div
				className="fixed left-1/2 top-1/2 flex h-[600px] w-[800px] -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-8 rounded-xl bg-white-100 px-16 pb-16 pt-16
			"
			>
				<Icon
					icon="pixelarticons:close"
					width="32"
					height="32"
					className="absolute right-8 top-8"
					onClick={onChangeModalFlag}
				/>
				<div className="flex flex-col items-center gap-4 text-center">
					<p className="font-dungGeunMo text-[48px]">선호 게임 선택</p>
					<p className="font-dungGeunMo text-white-400">
						선호하는 게임을 선택해주세요.
						<br /> 선택한 게임을 기반으로 게임 추천이 이루어집니다.
					</p>
				</div>
				<div className="grid w-full grid-cols-2 gap-6 overflow-auto p-1">
					<SelectGameItemContainer />
					<SelectGameItemContainer />
					<SelectGameItemContainer />
					<SelectGameItemContainer />
				</div>
			</div>
		</div>
	);
};

export default ArticleModal;
