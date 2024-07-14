import { Box } from '@mui/material';
import { DragEventHandler } from 'react';
import { type DropType } from '../../interfaces';

interface Props {
	children: JSX.Element | JSX.Element[];
	isOnDragOver?: boolean;
	dropType: DropType;
	onDragOver: DragEventHandler;
	onDragLeave: DragEventHandler;
	onDrop: DragEventHandler;
}

export const DropContainer = ({ children, isOnDragOver, onDragOver, onDragLeave, onDrop }: Props) => {
	return (
		<Box
			component='div'
			onDragOver={onDragOver}
			onDragLeave={onDragLeave}
			onDrop={onDrop}
			sx={{ width: '100%', minHeight: '360px', border: 1, borderRadius: 1, opacity: isOnDragOver ? 0.7 : 1 }}>
			{children}
		</Box>
	);
};
