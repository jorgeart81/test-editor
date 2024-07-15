import { type QuillOptions } from 'quill';

export const basicOptions: QuillOptions = {
	debug: 'info',
	placeholder: 'Escribe aquí...',
	theme: 'snow',
	modules: {
		toolbar: true,
	},
};
