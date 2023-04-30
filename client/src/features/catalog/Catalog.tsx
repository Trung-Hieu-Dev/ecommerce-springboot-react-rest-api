import React, { useEffect, useState } from 'react';

import { Product } from '../../model/product';
import ProductList from './ProductList';
import axios from 'axios';

export default function Catalog() {
	const [products, setProducts] = useState<Product[]>([]);

	useEffect(() => {
		axios.get('products').then((response) => setProducts(response.data));
	}, []);
	return (
		<>
			<ProductList products={products}></ProductList>
		</>
	);
}
