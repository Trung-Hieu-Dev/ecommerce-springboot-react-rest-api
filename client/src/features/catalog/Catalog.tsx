import React, { useEffect, useState } from 'react';

import { Product } from '../../model/product';
import ProductList from './ProductList';
import axios from 'axios';
import Loading from '../../layout/Loading';

export default function Catalog() {
	const [products, setProducts] = useState<Product[]>([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		axios
			.get('products')
			.then((response) => {
				setProducts(response.data);
			})
			.finally(() => setLoading(false));
	}, []);

	if (loading) return <Loading />;

	return (
		<>
			<ProductList products={products}></ProductList>
		</>
	);
}
