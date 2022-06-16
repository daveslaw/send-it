import "./cart-dropdown.scss";
import Button from "../Button/Button";
import CartItem from "../CartItem/CartItem";
import { useContext, useEffect } from "react";
import { CartContext } from "../../context/cart.context";

const CartDropdown = () => {
	
  const { cartItems } = useContext(CartContext);

  useEffect(() => {
    console.log(cartItems)
  }, [])

	return (
		<div className="cart-dropdown-container">
			<div className="cart-items"></div>
			{cartItems.map((item) => (
				<CartItem key={item.id} product={item} />
			))}
			<Button>checkout</Button>
		</div>
	);
};

export default CartDropdown;
