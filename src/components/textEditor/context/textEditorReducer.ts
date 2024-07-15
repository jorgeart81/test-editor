import Quill from 'quill';
import type { TextEditorState } from './TextEditorProvider';

type TextEditorAction = { type: 'setEditor'; payload: Quill } | { type: 'setHtmlContent'; payload: string };

export const textEditorReducer = (state: TextEditorState, action: TextEditorAction): TextEditorState => {
	switch (action.type) {
		case 'setEditor':
			return { ...state, editor: action.payload };

		case 'setHtmlContent':
			return { ...state, htmlContent: action.payload };

		default:
			return state;
	}
};
