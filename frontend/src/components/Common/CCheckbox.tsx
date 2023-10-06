import React from 'react';
import { CheckboxType } from '../../typedef/Game/filter.types';

const CCheckbox = ({ id, text, checked, onChange }: CheckboxType) => {
	return (
		<div className="justify-left my-2 flex select-none items-center gap-3">
			<input
				className={`h-7 w-7 appearance-none rounded-full border-2 border-solid border-white-400 p-[10px] transition-colors duration-200 ease-in-out checked:border-transparent checked:bg-blue-500 checked:bg-check-icon checked:bg-cover checked:bg-center`}
				type="checkbox"
				id={id}
				name={text}
				checked={checked}
				onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChange(e)}
			/>
			<label htmlFor={id} className="text-[16px] text-white-100">
				{text}
			</label>
		</div>
	);
};

export default CCheckbox;
