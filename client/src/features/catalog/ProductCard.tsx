import { ListItem, ListItemAvatar, Avatar, ListItemText } from '@mui/material';
import { Product } from '../../model/product';

interface Props {
	product: Product;
}

export default function ProductCard(props: Props) {
	return (
		<ListItem key={props.product.id}>
			<ListItemAvatar>
				<Avatar
					src={`http://localhost:8080/api/file/image/${props.product.imageUrl}`}
				/>
			</ListItemAvatar>
			<ListItemText>
				{props.product.name} - Price: {props.product.unitPrice}
			</ListItemText>
		</ListItem>
	);
}
