import { createContext, useState } from "react";

export const CartContext = createContext({
	show: false,
	setShow: () => {},
	cartItems: [],
	setCartItems: () => {}
});

export const CartProvider = ({ children }) => {
	const [show, setShow] = useState(false);
	const [cartItems, setCartItems] = useState([])
	const value = { show, setShow, cartItems, setCartItems };
	

	return (
		<CartContext.Provider value={value}>{children}</CartContext.Provider>
	);
};
