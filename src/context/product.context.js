import { createContext, useState, useEffect } from "react";
import { addCollectionAndDocuments } from "../utils/Firebase/firebase.utils";

export const ProductContext = createContext({
	products: [],
});

export const ProductProvider = ({ children }) => {
	const [products, setProducts] = useState([]);
	const value = { products, setProducts };
	

	return (
		<ProductContext.Provider value={value}>{children}</ProductContext.Provider>
	);
};
