import "./DeptPreview";
import ProductCard from "../ProductCard/ProductCard";
import './DeptPreview.scss';
import { Link } from "react-router-dom";


const DeptPreview = ({ title, products }) => {
	// const navigate = useNavigate();
	// const navToDeptHandler = () => {
	// 	navigate(`/shop/${title}`);		
	// };
	
	
	return (
		<div className="dept-preview-container">
			<h2>
				<Link to={title} className="title">{title.toUpperCase()}</Link>
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
