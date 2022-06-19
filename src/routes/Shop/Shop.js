import { useContext, Fragment } from "react";
import { CategoryContext } from "../../context/categories.context";
import ProductCard from "../../components/ProductCard/ProductCard";
import "./shop.styles.scss";

const Shop = () => {
	const { categoriesMap } = useContext(CategoryContext);

	return (
		<Fragment>
			{Object.keys(categoriesMap).map((title) => (
				<Fragment key={title}>
					<h2>{title}</h2>
					<div className="products-container">
						{categoriesMap[title].map((product) => (
							<ProductCard key={product.id} product={product} />
						))}
					</div>
				</Fragment>
			))}
		</Fragment>
	);
};

export default Shop;
