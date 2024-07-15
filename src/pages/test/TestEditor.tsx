import { Preview, TextEditor, TextEditorProvider } from '../../components/textEditor';

export const TestEditor = () => {
	return (
		<TextEditorProvider>
			<Preview />
			<TextEditor options='customOptions' />
		</TextEditorProvider>
	);
};
