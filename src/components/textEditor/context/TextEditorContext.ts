import { createContext } from 'react';

import Quill from 'quill';
import { type TextEditorState } from './TextEditorProvider';

interface TextEditorProps extends TextEditorState {
	setTextEditor: (editor: Quill) => void;
	setHtmlContent: (htmlContent: string) => void;
}

export const TextEditorContext = createContext({} as TextEditorProps);
