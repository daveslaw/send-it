import "./cart-dropdown.scss";
import Button from "../Button/Button";
import CartItem from "../CartItem/CartItem";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../context/cart.context";

const CartDropdown = () => {
	const { cartItems, cartPrice } = useContext(CartContext);
	const navigate = useNavigate();
	const navToCheckoutHandler = () => {
		navigate("/checkout");
	};

	return (
		<div className="cart-dropdown-container">
			<div className="cart-items">
				{cartItems.map((item) => (
					<CartItem key={item.id} product={item} />
				))}
				<div>
					{cartItems.length > 0
						? `Total Price: $${parseFloat(cartPrice).toFixed(2)}`
						: `Cart is empty`}
				</div>
			</div>

			<Button onClick={navToCheckoutHandler}>checkout</Button>
		</div>
	);
};

export default CartDropdown;
