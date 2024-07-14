import { DragEvent, useState } from 'react';

import { SaveOutlined } from '@mui/icons-material';
import { Box, Button, Container, Paper, Stack, styled, Typography } from '@mui/material';
import { DropContainer } from '../components/DragAndDrop';

const Item = styled(Paper)(({ theme }) => ({
	backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
	...theme.typography.body2,
	padding: theme.spacing(1),
	textAlign: 'center',
	color: theme.palette.text.secondary,
}));

interface DragDropItem {
	name: string;
}

const items: DragDropItem[] = [{ name: 'Widget-1' }, { name: 'Widget-2' }, { name: 'Widget-3' }];

export const Test = () => {
	const [dropItems, setDropItems] = useState<DragDropItem[]>([]);
	const [isOnDragOver, setIsOnDragOver] = useState(false);

	const handleOnDragStart = (event: DragEvent, widgetType: string) => {
		event.dataTransfer.setData('widgetType', widgetType);
	};

	const handleDragOver = (event: DragEvent) => {
		event.preventDefault();
		setIsOnDragOver(true);
		console.log('drag over');
	};

	const handleDragLeave = () => {
		setIsOnDragOver(false);
		console.log('drag leave');
	};

	const handleOnDrop = (event: DragEvent) => {
		const widget = event.dataTransfer.getData('widgetType');
		const item = items.find((item) => item.name === widget);
		if (item) setDropItems([...dropItems, item]);
		setIsOnDragOver(false);

		console.log('drop', { dropItems });
	};

	return (
		<>
			<Container component='main'>
				<Typography variant='h1'>Test</Typography>

				<Container sx={{ display: 'flex', gap: 2 }}>
					<Box sx={{ width: '100%' }}>
						<Stack spacing={2}>
							{items.map((item, i) => (
								<Item key={i} draggable onDragStart={(e) => handleOnDragStart(e, item.name)}>
									{item.name}
								</Item>
							))}
						</Stack>
					</Box>

					<Container sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
						{/* Drop container */}
						<Typography>Question</Typography>
						<DropContainer
							dropType='question'
							onDragOver={handleDragOver}
							onDragLeave={handleDragLeave}
							onDrop={handleOnDrop}
							isOnDragOver={isOnDragOver}>
							<Stack spacing={1}>
								{dropItems.length > 0 ? (
									dropItems.map((item, i) => (
										<Item key={i} draggable>
											{item.name}
										</Item>
									))
								) : (
									<Typography variant='body1'>Drag and Drop</Typography>
								)}
							</Stack>
						</DropContainer>
					</Container>
				</Container>

				<Stack spacing={2} direction='row'>
					<Button>Button</Button>
					<Button disabled>Disabled</Button>
					<Button type='submit' color='primary' sx={{ padding: 2 }}>
						<SaveOutlined sx={{ fontSize: 30, mr: 1 }} />
						Guardar
					</Button>
				</Stack>
			</Container>
		</>
	);
};
