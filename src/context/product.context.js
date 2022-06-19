import { createContext, useState, useEffect } from "react";
import { getCategoriesAndDocs } from "../utils/Firebase/firebase.utils";

export const ProductContext = createContext({
	products: [],
});

export const ProductProvider = ({ children }) => {
	const [products, setProducts] = useState([]);
	const value = { products, setProducts };
	
	useEffect(() => {
		const getCategoryMap = async () => {
			const categoryMap = await getCategoriesAndDocs();
			console.log(categoryMap)
		}
		getCategoryMap();
	  }, []);

	return (
		<ProductContext.Provider value={value}>{children}</ProductContext.Provider>
	);
};
