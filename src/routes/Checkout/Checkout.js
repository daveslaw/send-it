import "./Checkout.scss";
import { useContext } from "react";
import { CartContext } from "../../context/cart.context";
import CheckoutItem from "../../components/CheckoutItem/CheckoutItem";
// import CartItem from "../../components/CartItem";

const Checkout = () => {
	const { cartItems, totalPrice } = useContext(CartContext);

	return (
		<div className="checkout-container">
			<div className="checkout-header">
				<div className="header-block">
					<span>Product</span>
				</div>
				<div className="header-block">
					<span>Description</span>
				</div>
				<div className="header-block">
					<span>Quantity</span>
				</div>
				<div className="header-block">
					<span>Price</span>
				</div>
				<div className="header-block">
					<span>Remove</span>
				</div>
			</div>
			{cartItems.map((item) => {
				return <CheckoutItem key={item.id} cartItem={item} />;
			})}
            <div className='total'>
					{cartItems.length > 0
						? `Total Price: $${parseFloat(totalPrice).toFixed(2)}`
						: `Cart is empty`}
				</div>
		</div>
	);
};

export default Checkout;
