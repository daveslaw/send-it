import {
	BackgroundImage,
	Body,
	DeptBodyContainer,
} from "./dept-item.styles.js";
import {useNavigate} from 'react-router-dom';

const DeptItem = ({ department }) => {
	
	const {title, imageUrl, route} = department;
	const navigate = useNavigate();

	const navigateHandler = () => navigate(route);

	
	return (
		<DeptBodyContainer onClick={navigateHandler}>
			<BackgroundImage imageUrl={imageUrl} />
			<Body>
				<h2>{title}</h2>
				<p>Shop now</p>
			</Body>
		</DeptBodyContainer>
	);
};

export default DeptItem;
