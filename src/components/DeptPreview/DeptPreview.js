import { DeptPreviewContainer, Title, Preview } from "./DeptPreview.styles.js";
import ProductCard from "../ProductCard/ProductCard";

const DeptPreview = ({ title, products }) => {
	return (
		<DeptPreviewContainer>
			<h2>
				<Title to={title} className="title">
					{title.toUpperCase()}
				</Title>
			</h2>
			<Preview>
				{products
					.filter((_, index) => index < 4)
					.map((product) => (
						<ProductCard key={product.id} product={product} />
					))}
			</Preview>
		</DeptPreviewContainer>
	);
};

export default DeptPreview;
