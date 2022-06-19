import "./DeptPreview";
import ProductCard from "../ProductCard/ProductCard";
import './DeptPreview.scss';

const DeptPreview = ({ title, products }) => {
	return (
		<div className="dept-preview-container">
			<h2>
				<span className="title">{title.toUpperCase()}</span>
			</h2>
			<div className="preview">
				{products
					.filter((_, index) => index < 4)
					.map((product) => (
						<ProductCard key={product.id} product={product} />
					))}
			</div>
		</div>
	);
};

export default DeptPreview;
