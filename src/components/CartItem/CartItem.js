import "./cart-item.scss";

const CartItem = ({product}) => {
	
    const {name, imageUrl, price, quantity} = product;
    return (
		<div>
			<div>{name}</div>
			<div>{quantity}</div>
		</div>
	);
};

export default CartItem;
