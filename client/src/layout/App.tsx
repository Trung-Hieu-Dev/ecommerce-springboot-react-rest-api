import React, { useState } from 'react';
import {
	Container,
	CssBaseline,
	ThemeProvider,
	createTheme,
} from '@mui/material';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import './App.css';

import Catalog from '../features/catalog/Catalog';
import Header from './Header';
import HomePage from '../features/home/HomePage';
import AboutPage from '../features/about/AboutPage';
import ContactPage from '../features/contact/ContactPage';
import Uploader from '../features/upload/Uploader';
import ProductDetail from '../features/catalog/ProductDetail';
import AxiosInterceptor from '../interceptor/AxiosInterceptor';
import NotFound from '../features/error/NotFound';

function App() {
	const [darkMode, setDarkMode] = useState(false);

	const paletteType = darkMode ? 'dark' : 'light';

	const theme = createTheme({
		palette: { mode: paletteType },
	});

	return (
		<>
			<ThemeProvider theme={theme}>
				<AxiosInterceptor>
					<ToastContainer position="bottom-right" hideProgressBar />
					<CssBaseline />
					<Header onSetDarkMode={setDarkMode} darkMode={darkMode} />
					<Container>
						<Routes>
							<Route path="/" element={<HomePage />} />
							<Route path="catalog" element={<Catalog />} />
							<Route path="catalog/:productId" element={<ProductDetail />} />
							<Route path="about" element={<AboutPage />} />
							<Route path="contact" element={<ContactPage />} />
							<Route path="upload" element={<Uploader />} />
							<Route path="not-found" element={<NotFound />} />
						</Routes>
					</Container>
				</AxiosInterceptor>
			</ThemeProvider>
		</>
	);
}

export default App;
