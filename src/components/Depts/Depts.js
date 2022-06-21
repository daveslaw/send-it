import DeptItem from '../DeptItem/DeptItem';
import {DeptsContainer} from './depts.styles.js';

const Depts = () => {
	
    const deptArray = [
		{
			id: 1,
			title: "Hats",
			imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
			route: 'shop/hats',
		},
		{
			id: 2,
			title: "Jackets",
			imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
			route: 'shop/jackets',

		},
		{
			id: 3,
			title: "Sneakers",
			imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
			route: 'shop/sneakers',

		},
		{
			id: 4,
			title: "Women",
			imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
			route: 'shop/women',

		},
		{
			id: 5,
			title: "Men",
			imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
			route: 'shop/men',

		},
	];
    
    return (
		<DeptsContainer>
			{deptArray.map((department) => (
				<DeptItem
					key={department.id}
					department={department}
				/>
			))}
		</DeptsContainer>
	);
};

export default Depts;
