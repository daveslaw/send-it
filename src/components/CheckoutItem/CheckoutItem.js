import "./CheckoutItem.scss";
import { useContext } from "react";
import { CartContext } from "../../context/cart.context";

const CheckoutItem = ({ cartItem }) => {
	const { name, imageUrl, price, quantity } = cartItem;
	const { removeItemFromCart, removeItemWithButton, addItemToCart } =
		useContext(CartContext);
	const clearItemHandler = () => removeItemWithButton(cartItem);
	const increaseHandler = () => addItemToCart(cartItem);
	const decreaseHandler = () => removeItemFromCart(cartItem);

	return (
		<div className="checkout-item-container">
			<div className="image-container">
				<img src={imageUrl} alt={name} />
			</div>
			<span className="name">{name}</span>
			<span className="quantity">
				<div className="arrow" onClick={decreaseHandler}>
					&#10094;
				</div>
				<span className="value">{quantity}</span>
				<div className="arrow" onClick={increaseHandler}>
					&#10095;
				</div>
			</span>
			<span className="price">${parseFloat(price).toFixed(2)}</span>
			<div className="remove-button" onClick={clearItemHandler}>
				&#10005;
			</div>
		</div>
	);
};

export default CheckoutItem;
