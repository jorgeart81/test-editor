import React from 'react';
import { createBrowserRouter, Navigate } from 'react-router-dom';

import App from '../App';
import { Test, TestEditor } from '../pages/test';

export const router = createBrowserRouter([
	{ path: '/', element: <App /> },
	{
		path: '/test',
		children: [
			{
				path: '',
				element: <Navigate to='drag-and-drop' />,
			},
			{
				path: 'drag-and-drop',
				element: <Test />,
			},
			{
				path: 'rich-text',
				element: <TestEditor />,
			},
		],
	},
]);
