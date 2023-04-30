import { Button, ButtonGroup, Container, Typography } from '@mui/material';
import axios from 'axios';

export default function AboutPage() {
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
							.catch((error) => console.log(error.response.data.message))
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
							.catch((error) => console.log(error.response.data.message))
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
							.catch((error) => console.log(error.response.data.message))
					}
				>
					Test 500
				</Button>
			</ButtonGroup>
		</Container>
	);
}
