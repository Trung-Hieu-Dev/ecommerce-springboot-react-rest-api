import { ShoppingCart } from '@mui/icons-material';
import {
	AppBar,
	Badge,
	Box,
	IconButton,
	List,
	ListItem,
	Switch,
	Toolbar,
	Typography,
} from '@mui/material';
import { NavLink } from 'react-router-dom';

interface Props {
	darkMode: boolean;
	onSetDarkMode: (isDark: boolean) => void;
}

export default function Header(props: Props) {
	const handleChange = (e: any) => {
		props.onSetDarkMode(e.target.checked);
	};

	const midLinks = [
		{ title: 'catalog', path: '/catalog' },
		{ title: 'about', path: '/about' },
		{ title: 'contact', path: '/contact' },
		{ title: 'upload', path: '/upload' },
	];

	const rightLinks = [
		{ title: 'login', path: '/login' },
		{ title: 'register', path: '/register' },
	];

	const navStyle = {
		color: 'inherit',
		'&:hover': { color: 'grey.500' },
		'&.active': { color: 'text.secondary' },
	};

	return (
		<AppBar sx={{ marginBottom: 4, position: 'static' }}>
			<Toolbar
				sx={{
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'space-between',
				}}
			>
				<Box>
					<Typography
						variant="h6"
						component={NavLink}
						to="/"
						sx={{ color: 'inherit', textDecoration: 'none' }}
					>
						My Shop
					</Typography>
					<Switch
						checked={props.darkMode}
						onChange={handleChange}
						inputProps={{ 'aria-label': 'controlled' }}
					/>
				</Box>
				<List sx={{ display: 'flex' }}>
					{midLinks.map(({ title, path }) => (
						<ListItem component={NavLink} to={path} key={path} sx={navStyle}>
							{title.toUpperCase()}
						</ListItem>
					))}
				</List>

				<Box sx={{ display: 'flex', alignItems: 'center' }}>
					<IconButton
						aria-label="cart"
						sx={{ size: 'large', color: 'inherit' }}
					>
						<Badge badgeContent={4} color="secondary">
							<ShoppingCart />
						</Badge>
					</IconButton>

					<List sx={{ display: 'flex' }}>
						{rightLinks.map(({ title, path }) => (
							<ListItem component={NavLink} to={path} key={path} sx={navStyle}>
								{title.toUpperCase()}
							</ListItem>
						))}
					</List>
				</Box>
			</Toolbar>
		</AppBar>
	);
}
