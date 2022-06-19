import {Routes, Route} from 'react-router-dom';
import "./shop.styles.scss";
import DeptsPreview from '../DeptsPreview/DeptsPreview'

const Shop = () => {

	return (
		<Routes>
			<Route index element={<DeptsPreview/>}/>
		</Routes>
	);
};

export default Shop;
