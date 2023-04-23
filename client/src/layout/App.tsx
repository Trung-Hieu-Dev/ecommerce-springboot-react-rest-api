import React, { useEffect, useState } from 'react';
import './App.css';
import { Product } from '../model/product';
import Catalog from '../features/catalog/Catalog';

function App() {
	const [products, setProducts] = useState<Product[]>([]);

	const addProduct = () => {
		setProducts((prevState) => [
			...prevState,
			{
				id: prevState.length + 1,
				name: 'prod ' + (prevState.length + 1),
				description: 'new product',
				brand: 'unknown',
				category: 'shoes',
				imageUrl: 'unknown',
				unitPrice: 3.8 + (prevState.length + 1),
				unitsInStock: 200,
			},
		]);
		console.log(products);
	};

	useEffect(() => {
		fetch('http://localhost:8080/api/products')
			.then((response) => response.json())
			.then((data) => setProducts(data));
	}, []);

	return (
		<div style={{ color: 'blue' }}>
			<h1>My Shop</h1>
			<Catalog products={products} onAddProduct={addProduct}></Catalog>
		</div>
	);
}

export default App;
