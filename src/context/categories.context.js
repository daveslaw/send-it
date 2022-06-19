import { createContext, useState, useEffect } from "react";
import { getCategoriesAndDocs } from "../utils/Firebase/firebase.utils";

export const CategoryContext = createContext({
	categoriesMap: {},
});

export const CategoryProvider = ({ children }) => {
	const [categoriesMap, setCategoriesMap] = useState([]);
	const value = { categoriesMap, setCategoriesMap };
	
	useEffect(() => {
		const getCategoryMap = async () => {
			const categoryMap = await getCategoriesAndDocs();
			console.log(Object.keys(categoryMap));

			setCategoriesMap(categoryMap);
		}
		getCategoryMap();
	  }, []);

	return (
		<CategoryContext.Provider value={value}>{children}</CategoryContext.Provider>
	);
};
