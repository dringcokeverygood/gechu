import React from 'react';
import { LuX } from 'react-icons/lu';

type LabelType = {
	id: string;
	text: string;
};

const CFilterLabel = ({ id, text }: LabelType) => {
	return (
		<div className="flex w-fit items-center justify-center gap-3 rounded-[115px] border-2 border-solid border-blue-500 px-3 py-2">
			<div className="text-[16px] font-bold text-blue-500">{text}</div>
			<LuX id={id} className="text-blue-500" />
		</div>
	);
};

export default CFilterLabel;
