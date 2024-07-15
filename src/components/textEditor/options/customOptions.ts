import { type QuillOptions } from 'quill';

export const customOptions: QuillOptions = {
	debug: 'info',
	placeholder: 'Escribe aquí...',
	theme: 'snow',
	modules: {
		toolbar: {
			container: [
				['bold', 'italic', 'underline', 'strike'], // toggled buttons
				['blockquote', 'code-block'],
				['link', 'image'],

				[{ list: 'ordered' }, { list: 'bullet' }, { list: 'check' }],
				[{ script: 'sub' }, { script: 'super' }], // superscript/subscript
				[{ indent: '-1' }, { indent: '+1' }], // outdent/indent

				[{ size: ['small', false, 'large', 'huge'] }], // custom dropdown

				['clean'], // remove formatting button
			],
			handlers: {
				image: customImageHandler,
			},
		},
	},
};

function customImageHandler(value: boolean) {
	const input = document.createElement('input');
	input.setAttribute('type', 'file');
	input.setAttribute('accept', 'image/*');
	input.click();

	input.onchange = async () => {
		if (input !== null && input.files !== null) {
			const file = input.files[0];
			console.log('customImageHandler', { file });
		}
	};
	console.log('customImageHandler', value);
}
