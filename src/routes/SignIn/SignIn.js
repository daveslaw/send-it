import { React } from "react";

import {
	signInWithGooglePopup,
	createUserDoc,
} from "../../utils/Firebase/firebase.utils";

import SignUpForm from '../../components/SignUpForm/SignUpForm';
import SignInForm from '../../components/SignInForm/SignInForm';

const SignIn = () => {
	const logGoogleUser = async () => {
		const { user } = await signInWithGooglePopup();
		const userDocRef = await createUserDoc(user);
	};

	return (
		<div>
			<h1>Sign in Page</h1>
			<button onClick={logGoogleUser}>Sign in with Google Popup</button>
            <SignUpForm/>
            <SignInForm/>
		</div>
	);
};

export default SignIn;
