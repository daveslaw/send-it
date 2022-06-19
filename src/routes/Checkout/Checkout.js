import "./Checkout.scss";
import { useContext } from "react";
import {CartContext} from "../../context/cart.context";
// import CartItem from "../../components/CartItem";

const Checkout = () => {
	const { cartItems, cartPrice } = useContext(CartContext);

	return (
		<div className="checkout-container">
			{/* <div className="cart-items">
				{cartItems.map((item) => (
					<CartItem key={item.id} product={item} />
				))}
				<div>Total Price: ${parseFloat(cartPrice).toFixed(2)}</div>
			</div> */}
            <h1>I am checkout Page</h1>

		</div>
	);
};

export default Checkout;
