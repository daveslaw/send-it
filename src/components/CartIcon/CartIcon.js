import { useContext } from "react";
import {CartIconContainer, ShoppingCartIcon, ItemCount} from "./cart-icon.styles.js";
import { CartContext } from "../../context/cart.context";

const CartIcon = () => {
	const { setShow, cartCount } = useContext(CartContext);
	
	const toggleHandler = () => {
		setShow((prevState) => !prevState);
	};

	return (
		<CartIconContainer onClick={toggleHandler}>
			<ShoppingCartIcon className="shopping-icon" />
			<ItemCount >{cartCount}</ItemCount>
		</CartIconContainer>
	);
};

export default CartIcon;
