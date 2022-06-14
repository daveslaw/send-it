import { React } from "react";



import SignUpForm from "../../components/SignUpForm/SignUpForm";
import SignInForm from "../../components/SignInForm/SignInForm";

import "./authentication.route.scss";

const Authentication = () => {
	

	return (
		<div className="sign-in-page-container">
			{/* <button onClick={logGoogleUser}>Sign in with Google Popup</button> */}
			<SignInForm />
			<SignUpForm />
		</div>
	);
};

export default Authentication;
