import "./App.css";
import "./departments.styles.scss"

const App = () => {
	const deptArray = [
		{
			id: "1",
			name: "Hats",
		},
		{
			id: "2",
			name: "Jackets",
		},
		{
			id: "3",
			name: "Women",
		},
		{
			id: "4",
			name: "Men",
		},
		{
			id: "5",
			name: "Sneakers",
		},
	];

	return (
		<div className="departments-container">
			{deptArray.map((department) => (
				<div className="department-container" key={department.id}>
					<div className="background-image"/>
					<div className="department-body-container">
						<h2>{department.name}</h2>
						<p>Shop now</p>
					</div>
				</div>
			))}
		</div>
	);
};

export default App;
