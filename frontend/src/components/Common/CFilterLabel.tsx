import React from 'react';
import { LuX } from 'react-icons/lu';

type LabelType = {
	id: string;
	text: string;
	onClick: (e: React.MouseEvent<SVGElement>) => void;
};

const CFilterLabel = ({ id, text, onClick }: LabelType) => {
	return (
		<div className="flex w-fit items-center justify-center gap-3 rounded-[115px] border-2 border-solid border-white-200 bg-blue-500 px-3 py-2">
			<div className="text-[16px] font-bold text-white-200">{text}</div>
			<LuX
				id={id}
				className="text-white-200"
				onClick={(e: React.MouseEvent<SVGElement>) => onClick(e)}
			/>
		</div>
	);
};

export default CFilterLabel;
