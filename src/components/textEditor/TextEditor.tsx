import React, { useContext, useLayoutEffect, useRef, useState } from 'react';

import { Box, Button, Container } from '@mui/material';
import Quill from 'quill';
import 'quill/dist/quill.snow.css';
import { TextEditorContext } from './context/TextEditorContext';
import { basicOptions, customOptions, extendOptions } from './options';

const typeOptions = { basicOptions, extendOptions, customOptions };

interface Props {
	options?: keyof typeof typeOptions;
}

export const TextEditor = ({ options = 'basicOptions' }: Props) => {
	const { editor, setTextEditor, setHtmlContent } = useContext(TextEditorContext);

	const [loaded, setLoaded] = useState(false);
	const divEditorRef = useRef<HTMLDivElement>(null);

	useLayoutEffect(() => {
		setLoaded(true);
		if (divEditorRef.current && loaded) {
			const quill = new Quill(divEditorRef.current, typeOptions[options]);
			setTextEditor(quill);
		}
	}, [loaded, divEditorRef]);

	return (
		<Container component='section' sx={{ display: 'flex', flexDirection: 'column', padding: 1 }}>
			<div ref={divEditorRef}></div>
			<Box display='flex' justifyContent='flex-end' gap={2} paddingTop={2}>
				<Button
					onClick={() => {
						const htmlContent = editor?.root.innerHTML;
						if (htmlContent) setHtmlContent(htmlContent);
					}}>
					Preview
				</Button>
				<Button
					onClick={() => {
						const delta = editor?.getContents(); // Get Delta object
						const htmlContent = editor?.root.innerHTML;

						console.log('test', { htmlContent, delta });
					}}>
					Save
				</Button>
			</Box>
		</Container>
	);
};
