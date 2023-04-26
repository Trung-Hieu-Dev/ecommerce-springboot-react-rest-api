import { Typography } from '@mui/material';
import { useParams } from 'react-router-dom';

export default function ProductDetail() {
	let params = useParams();
	return (
		<Typography variant="h2">Product Detail {params.productId}</Typography>
	);
}
