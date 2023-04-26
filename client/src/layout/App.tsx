import React, { useState } from 'react';
import {
	Container,
	CssBaseline,
	ThemeProvider,
	createTheme,
} from '@mui/material';

import './App.css';
import Catalog from '../features/catalog/Catalog';
import Header from './Header';

function App() {
	const [darkMode, setDarkMode] = useState(false);

	const paletteType = darkMode ? 'dark' : 'light';

	const theme = createTheme({
		palette: { mode: paletteType },
	});

	return (
		<>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<Header onSetDarkMode={setDarkMode} darkMode={darkMode} />
				<Container>
					<Catalog />
				</Container>
			</ThemeProvider>
		</>
	);
}

export default App;
