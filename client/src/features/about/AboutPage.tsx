import {
	Alert,
	AlertTitle,
	Button,
	ButtonGroup,
	Container,
	List,
	ListItem,
	ListItemText,
	Typography,
} from '@mui/material';
import axios from 'axios';
import { useState } from 'react';

export default function AboutPage() {
	const [validationErrors, setValidationErrors] = useState<string[]>([]);

	return (
		<Container>
			<Typography>Error Messages</Typography>
			<ButtonGroup fullWidth>
				<Button
					variant="contained"
					onClick={() =>
						axios
							.post('/buggy/validate-error', {
								name: '',
								email: 'fewfew',
							})
							.then((response) => console.log(response.data))
							.catch((error) => setValidationErrors(error))
					}
				>
					Test Validate Error
				</Button>
				<Button
					variant="contained"
					onClick={() =>
						axios
							.get('/buggy/404')
							.then((response) => console.log(response.data))
							.catch((error) => console.log(error))
					}
				>
					Test 404
				</Button>
				<Button
					variant="contained"
					onClick={() =>
						axios
							.get('/buggy/500')
							.then((response) => console.log(response.data))
							.catch((error) => console.log(error))
					}
				>
					Test 500
				</Button>
			</ButtonGroup>

			{validationErrors.length > 0 && (
				<Alert severity="error">
					<AlertTitle>Validation Errors</AlertTitle>
					<List>
						{validationErrors.map((error) => (
							<ListItem key={error}>
								<ListItemText>{error}</ListItemText>
							</ListItem>
						))}
					</List>
				</Alert>
			)}
		</Container>
	);
}
