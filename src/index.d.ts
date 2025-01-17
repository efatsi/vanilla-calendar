import {
	IActions, IDate, ILocale, IPopups, IRange, ISelected, ISelection, IVisibility,
} from './types';

type Settings = {
	lang: string;
	iso8601: boolean;
	range: Partial<IRange>;
	selection: Partial<ISelection>;
	selected: Partial<ISelected>;
	visibility: Partial<IVisibility>;
}

export type Options = {
	type?: string;
	date?: Partial<IDate>;
	settings?: Partial<Settings>;
	locale?: Partial<ILocale>;
	actions?: Partial<IActions>;
	popups?: IPopups | null;
}

declare class VanillaCalendar<T extends (HTMLElement | string), R extends Partial<Options>> {
	constructor(selector: T, option?: R)

	update: () => void;

	init: () => void;
}

export default VanillaCalendar;
