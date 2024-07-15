import { type QuillOptions } from 'quill';
import { fullToobarOptions } from './toolbar/fullToolbarOptions';

export const extendOptions: QuillOptions = {
	debug: 'info',
	placeholder: 'Escribe aquí...',
	theme: 'snow',
	modules: {
		toolbar: fullToobarOptions,
	},
};
