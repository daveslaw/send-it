import {
	BackgroundImage,
	Body,
	DeptBodyContainer,
} from "./dept-item.styles.js";

const DeptItem = ({ imageUrl, title }) => {
	return (
		<DeptBodyContainer>
			<BackgroundImage imageUrl={imageUrl} />
			<Body>
				<h2>{title}</h2>
				<p>Shop now</p>
			</Body>
		</DeptBodyContainer>
	);
};

export default DeptItem;
