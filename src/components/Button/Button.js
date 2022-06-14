import React from "react";
import "./button.styles.scss";

const Button = ({ children, buttonType, ...otherProps }) => {
	const buttonTypeClasses = {
		google: "google-sign-in",
		inverted: "inverted",
		default: "default",
	};
	return (
		<button
			className={`button-container ${buttonTypeClasses[buttonType]}`}
			{...otherProps}
		>
			{children}
		</button>
	);
};

export default Button;
