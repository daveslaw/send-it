import React from "react";
import "./dept-item.styles.scss";

const DeptItem = ({imageUrl, title}) => {
	return (
		<div className="department-container" >
			<div
				className="background-image"
				style={{ backgroundImage: `url(${imageUrl})` }}
			/>
			<div className="department-body-container">
				<h2>{title}</h2>
				<p>Shop now</p>
			</div>
		</div>
	);
};

export default DeptItem;
