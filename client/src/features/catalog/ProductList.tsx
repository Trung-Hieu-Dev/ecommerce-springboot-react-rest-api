import { List } from '@mui/material';
import { Product } from '../../model/product';
import ProductCard from './ProductCard';

interface Props {
	products: Product[];
}

export default function ProductList(props: Props) {
	return (
		<List>
			{props.products.map((product, index) => (
				<ProductCard product={product} key={index}></ProductCard>
			))}
		</List>
	);
}
