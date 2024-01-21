import React from 'react';
import ReactDOM from 'react-dom/client';
import {
	createBrowserRouter,
	createRoutesFromElements,
	RouterProvider,
	Route,
} from 'react-router-dom';

import Layout from './Layout.jsx';
import App from './App.jsx';
import Login from './pages/Login.jsx';
import Note from './pages/Note';

import './main.scss';

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<Layout />}>
			<Route index path="/" element={<App />} />
			<Route path="note" element={<Note />} />
			<Route path="note/:id" element={<Note />} />
			<Route path="login" element={<Login />} />
		</Route>
	)
);

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<RouterProvider router={router}></RouterProvider>
	</React.StrictMode>
);
