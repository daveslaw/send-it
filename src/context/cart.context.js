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

const removeCartItem = (cartItems, cartItemToRemove) => {
	const existingCartItem = cartItems.find(
		(cartItem) => cartItem.id === cartItemToRemove.id
	);

	if (existingCartItem.quantity === 1) {
		return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
	}

	return cartItems.map((cartItem) =>
		cartItem.id === cartItemToRemove.id
			? { ...cartItem, quantity: cartItem.quantity - 1 }
			: cartItem
	);
};

const removeButtonItem = (cartItems, cartItemToRemove) => {
	return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
}

export const CartContext = createContext({
	show: false,
	setShow: () => {},
	cartItems: [],
	setCartItems: () => {},
	addItemToCart: () => {},
	removeItemFromCart: () => {},
	removeItemButton: () => {},
	cartCount: 0,
	totalPrice: 0,
});

export const CartProvider = ({ children }) => {
	const [show, setShow] = useState(false);
	const [cartItems, setCartItems] = useState([]);
	const [cartCount, setCartCount] = useState(0);
	const [totalPrice, setTotalPrice] = useState(0);

	useEffect(() => {
		const newCartCount = cartItems.reduce(
			(total, cartItem) => total + cartItem.quantity,
			0
		);
		setCartCount(newCartCount);
	}, [cartItems]);

	useEffect(() => {
		const newCartPrice = cartItems.reduce(
			(total, cartItem) => total + cartItem.price * cartItem.quantity,
			0
		);
		setTotalPrice(newCartPrice);
	}, [cartItems]);

	const addItemToCart = (productToAdd) => {
		setCartItems(addCartItem(cartItems, productToAdd));
	};

	const removeItemFromCart = (cartItemToRemove) => {
		setCartItems(removeCartItem(cartItems, cartItemToRemove));
	};

	const removeItemWithButton = (cartItemToRemove) => {
		setCartItems(removeButtonItem(cartItems, cartItemToRemove));
	}

	const value = {
		show,
		setShow,
		addItemToCart,
		cartItems,
		cartCount,
		totalPrice,
		removeItemFromCart,
		removeItemWithButton
	};

	return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
