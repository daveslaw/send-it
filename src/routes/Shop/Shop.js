import {Routes, Route} from 'react-router-dom';
import "./shop.styles.scss";
import DeptsPreview from '../DeptsPreview/DeptsPreview';
import DeptPage from '../DeptPage/DeptPage';

const Shop = () => {

	return (
		<Routes>
			<Route index element={<DeptsPreview/>}/>
			<Route path=':department' element={<DeptPage/>}/>
		</Routes>
	);
};

export default Shop;
