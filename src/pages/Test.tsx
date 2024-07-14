import { Box, Container, Paper, Stack, styled, Typography } from '@mui/material';

const Item = styled(Paper)(({ theme }) => ({
	backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
	...theme.typography.body2,
	padding: theme.spacing(1),
	textAlign: 'center',
	color: theme.palette.text.secondary,
}));

export const Test = () => {
	return (
		<>
			<Container component='main'>
				<Typography variant='h1'>Test</Typography>

				<Box sx={{ width: '100%' }}>
					<Stack spacing={2}>
						<Item>Item 1</Item>
						<Item>Item 2</Item>
						<Item>Item 3</Item>
					</Stack>
				</Box>
			</Container>
		</>
	);
};
