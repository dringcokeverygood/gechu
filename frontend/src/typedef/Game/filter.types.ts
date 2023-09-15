export type CheckboxType = {
	id: string;
	text: string;
	checked: boolean;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export interface FilterObject {
	[key: string]: {
		text: string;
		flag: boolean;
	};
}

export type FilterType = {
	filterState: FilterObject;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export type AllFilters = {
	genreFilter: FilterType;
	platformFilter: FilterType;
};
