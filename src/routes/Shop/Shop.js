import { useContext } from "react";
import { CategoryContext } from "../../context/categories.context";
import DeptPreview from '../../components/DeptPreview/DeptPreview';
import "./shop.styles.scss";

const Shop = () => {
	const { categoriesMap } = useContext(CategoryContext);

	return (
		<div >
			{Object.keys(categoriesMap).map((title) => {
				const products = categoriesMap[title];
				return <DeptPreview key={title} title={title} products={products} />
			}
				
			)}
		</div>
	);
};

export default Shop;
