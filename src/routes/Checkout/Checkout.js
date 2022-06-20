import {
	CheckoutContainer,
	CheckoutHeader,
	HeaderBlock,
	Total,
} from "./Checkout.styles.js";
import { useContext } from "react";
import { CartContext } from "../../context/cart.context";
import CheckoutItem from "../../components/CheckoutItem/CheckoutItem";
// import CartItem from "../../components/CartItem";

const Checkout = () => {
	const { cartItems, totalPrice } = useContext(CartContext);

	return (
		<CheckoutContainer>
			<CheckoutHeader>
				<HeaderBlock>
					<span>Product</span>
				</HeaderBlock>
				<HeaderBlock>
					<span>Description</span>
				</HeaderBlock>
				<HeaderBlock>
					<span>Quantity</span>
				</HeaderBlock>
				<HeaderBlock>
					<span>Price</span>
				</HeaderBlock>
				<HeaderBlock>
					<span>Remove</span>
				</HeaderBlock>
			</CheckoutHeader>
			{cartItems.map((item) => {
				return <CheckoutItem key={item.id} cartItem={item} />;
			})}
			<Total>
				{cartItems.length > 0
					? `Total Price: $${parseFloat(totalPrice).toFixed(2)}`
					: `Cart is empty`}
			</Total>
		</CheckoutContainer>
	);
};

export default Checkout;
