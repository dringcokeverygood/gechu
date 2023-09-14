import React from 'react';
import { CheckboxType } from '../../typedef/Game/checkbox.types';

const CCheckbox = ({ id, text, checked, onChange }: CheckboxType) => {
	return (
		<div className="flex select-none items-center justify-center">
			<input
				className={`checked:border-transparent checked:bg-check-icon h-5 w-5  appearance-none rounded-full border-2 border-solid border-white-400 p-[10px] checked:bg-blue-500 checked:bg-cover checked:bg-center`}
				type="checkbox"
				id={id}
				name={text}
				checked={checked}
				onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChange(e)}
			/>
			<p className="text-4 ml-[10px] text-white-100">{text}</p>
		</div>
	);
};

export default CCheckbox;
