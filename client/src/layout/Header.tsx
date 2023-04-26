import { AppBar, Switch, Toolbar, Typography } from '@mui/material';

interface Props {
	darkMode: boolean;
	onSetDarkMode: (isDark: boolean) => void;
}

export default function Header(props: Props) {
	const handleChange = (e: any) => {
		props.onSetDarkMode(e.target.checked);
	};

	return (
		<AppBar sx={{ marginBottom: 4, position: 'static' }}>
			<Toolbar>
				<Typography variant="h6">My Shop</Typography>
				<Switch
					checked={props.darkMode}
					onChange={handleChange}
					inputProps={{ 'aria-label': 'controlled' }}
				/>
			</Toolbar>
		</AppBar>
	);
}
