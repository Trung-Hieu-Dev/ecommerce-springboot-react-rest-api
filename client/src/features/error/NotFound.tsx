import { useNavigate } from 'react-router-dom';
import { Button, Container, Divider, Typography } from '@mui/material';

export default function NotFound() {
	const navigate = useNavigate();
	return (
		<Container>
			<Typography variant="h3">Page Not Found</Typography>
			<Divider />
			<Button onClick={() => navigate(-1)}>Back to previous</Button>
		</Container>
	);
}
