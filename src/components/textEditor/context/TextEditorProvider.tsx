import { useReducer } from 'react';

import Quill from 'quill';
import { TextEditorContext } from './TextEditorContext';
import { textEditorReducer } from './textEditorReducer';

export interface TextEditorState {
	editor?: Quill;
	htmlContent?: string;
}

const INITIAL_STATE: TextEditorState = {
	editor: undefined,
	htmlContent: undefined,
};

interface Props {
	children: JSX.Element | JSX.Element[];
}

export const TextEditorProvider = ({ children }: Props) => {
	const [state, dispatch] = useReducer(textEditorReducer, INITIAL_STATE);

	const setTextEditor = (editor: Quill) => {
		dispatch({ type: 'setEditor', payload: editor });
	};

	const setHtmlContent = (htmlContent: string) => {
		dispatch({ type: 'setHtmlContent', payload: htmlContent });
	};

	return (
		<TextEditorContext.Provider
			value={{
				...state,

				// methods
				setTextEditor,
				setHtmlContent,
			}}>
			{children}
		</TextEditorContext.Provider>
	);
};
