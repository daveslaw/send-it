import { createContext, useState, useEffect } from "react";

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
	cartCount: 0,
	cartPrice: 0,
});

export const CartProvider = ({ children }) => {
	const [show, setShow] = useState(false);
	const [cartItems, setCartItems] = useState([]);
	const [cartCount, setCartCount] = useState(0);
	const [cartPrice, setCartPrice] = useState(0)

	useEffect(() =>{
		const newCartCount = cartItems.reduce((total, cartItem)=> total + cartItem.quantity, 0);
		setCartCount(newCartCount);
	}, [cartItems])

	useEffect(() =>{
		const newCartPrice = cartItems.reduce((total, cartItem)=> total + cartItem.price * cartItem.quantity, 0);
		setCartPrice(newCartPrice);
	}, [cartItems])
	
	const addItemToCart = (productToAdd) => {
		setCartItems(addCartItem(cartItems, productToAdd));
	};
	const value = { show, setShow, addItemToCart, cartItems, cartCount, cartPrice };
	

	return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
