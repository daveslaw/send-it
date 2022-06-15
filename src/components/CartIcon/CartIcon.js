import { useContext } from "react";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import "./cart-icon.scss";
import { CartContext } from "../../context/cart.context";

const CartIcon = () => {
	const { setShow } = useContext(CartContext);

	const toggleHandler = () => {
		setShow((prevState) => !prevState);
	};

	return (
		<div className="cart-icon-container" onClick={toggleHandler}>
			<ShoppingIcon className="shopping-icon" />
			<span className="item-count">0</span>
		</div>
	);
};

export default CartIcon;