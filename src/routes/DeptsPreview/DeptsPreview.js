import { useContext } from "react";
import { CategoryContext } from "../../context/categories.context";
import DeptPreview from '../../components/DeptPreview/DeptPreview';
import "./depts-preview.scss";

const DeptsPreview = () => {
	const { categoriesMap } = useContext(CategoryContext);

	return (
		<>
			{Object.keys(categoriesMap).map((title) => {
				const products = categoriesMap[title];
				return <DeptPreview key={title} title={title} products={products} />
			}
				
			)}
		</>
	);
};

export default DeptsPreview;
