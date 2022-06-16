import { createContext, useState } from "react";

const addCartItem = (cartItems, productToAdd) => {
	const existingCartItem = cartItems.find(
		(cartItem) => cartItem.id === productToAdd.id
	);

	if (existingCartItem) {
		return cartItems.map((cartItem) =>
			cartItem.id === productToAdd.id
				? { ...cartItem, quantity: cartItem.quantity + 1 }
				: cartItem
		);
	}
	return [...cartItems, { ...productToAdd, quantity: 1 }];
};

export const CartContext = createContext({
	show: false,
	setShow: () => {},
	cartItems: [],
	setCartItems: () => {},
	addItemToCart: () => {},
});

export const CartProvider = ({ children }) => {
	const [show, setShow] = useState(false);
	const [cartItems, setCartItems] = useState([]);
	const addItemToCart = (productToAdd) => {
		setCartItems(addCartItem(cartItems, productToAdd));
	};
	const value = { show, setShow, addItemToCart, cartItems };

	return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
