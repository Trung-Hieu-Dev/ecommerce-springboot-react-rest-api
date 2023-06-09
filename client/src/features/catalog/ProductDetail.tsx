import {
	Divider,
	Grid,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableRow,
	Typography,
} from '@mui/material';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import { Product } from '../../model/product';

export default function ProductDetail() {
	let params = useParams();

	const [product, setProduct] = useState<Product | null>(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		axios
			.get(`products/${params.productId}`)
			.then((res) => {
				setProduct(res.data);
			})
			.catch((error) => console.log(error.message))
			.finally(() => {
				setLoading(false);
			});
	}, [params.productId]);

	if (loading) return <h3>Loading</h3>;

	if (!product) return <h3>Product not found</h3>;

	return (
		<Grid container spacing={6}>
			<Grid item xs={4}>
				<img
					src={`http://localhost:8080/api/file/image/${product?.imageUrl}`}
					alt={product?.name}
					style={{ width: '100%' }}
				/>
			</Grid>
			<Grid item xs={8}>
				<Typography variant="h3">{product?.name}</Typography>
				<Divider sx={{ mb: 2 }} />
				<Typography variant="h4" color="secondary" sx={{ mb: 4 }}>
					${product?.unitPrice.toFixed(2)}
				</Typography>
				<TableContainer>
					<Table>
						<TableBody>
							<TableRow>
								<TableCell>Name</TableCell>
								<TableCell>{product?.name}</TableCell>
							</TableRow>
							<TableRow>
								<TableCell>Description</TableCell>
								<TableCell>{product?.description}</TableCell>
							</TableRow>
							<TableRow>
								<TableCell>Category</TableCell>
								<TableCell>{product?.category}</TableCell>
							</TableRow>
							<TableRow>
								<TableCell>Author</TableCell>
								<TableCell>{product?.brand}</TableCell>
							</TableRow>
							<TableRow>
								<TableCell>Quantity in Stock</TableCell>
								<TableCell>{product?.unitsInStock}</TableCell>
							</TableRow>
						</TableBody>
					</Table>
				</TableContainer>
			</Grid>
		</Grid>
	);
}
