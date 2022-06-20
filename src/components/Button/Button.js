import {
	BaseButton,
	GoogleSignInButton,
	InvertedButton,
} from "./button.styles.js";

export const buttonTypeClasses = {
	base: "base",
	google: "google",
	inverted: "inverted",
};

const Button = ({ children, buttonType, ...otherProps }) => {
	const getButton = (buttonType = buttonTypeClasses.base) =>
		({
			[buttonTypeClasses.base]: BaseButton,
			[buttonTypeClasses.google]: GoogleSignInButton,
			[buttonTypeClasses.inverted]: InvertedButton,
		}[buttonType]);

	const CustomButton = getButton(buttonType);
	return <CustomButton {...otherProps}>{children}</CustomButton>;
};

export default Button;
