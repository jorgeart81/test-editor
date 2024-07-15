import { useContext } from 'react';
import { TextEditorContext } from './context/TextEditorContext';
import { Box, Container, Paper, Typography } from '@mui/material';

export const Preview = () => {
	const { htmlContent } = useContext(TextEditorContext);

	return (
		<Container>
			<Paper sx={{ minHeight: '360px' }}>
				{htmlContent ? (
					<Box textAlign='initial' padding={2} dangerouslySetInnerHTML={{ __html: htmlContent }}></Box>
				) : (
					<Box display='flex' height={360} justifyContent='center' alignItems='center'>
						<Typography variant='h6'>Preview</Typography>
					</Box>
				)}
			</Paper>
		</Container>
	);
};
