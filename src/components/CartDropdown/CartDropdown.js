import "./cart-dropdown.scss";
import Button from "../Button/Button";
import CartItem from "../CartItem/CartItem";
import { useContext } from "react";
import { CartContext } from "../../context/cart.context";

const CartDropdown = () => {
	const { cartItems, cartPrice } = useContext(CartContext);

	return (
		<div className="cart-dropdown-container">
			<div className="cart-items">
				{cartItems.map((item) => (
					<CartItem key={item.id} product={item} />
				))}
			<div>Total Price: ${parseFloat(cartPrice).toFixed(2)}</div>
			</div>
			


			<Button>checkout</Button>
		</div>
	);
};

export default CartDropdown;
