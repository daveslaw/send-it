import { React, useState } from "react";
import {
	createAuthUserWithEmailAndPassword,
	createUserDoc,
	signInWithGooglePopup,
} from "../../utils/Firebase/firebase.utils";
import FormInput from "../FormInput/FormInput";
import Button from "../Button/Button";
import "./SignInForm.scss";

const defaultFormData = {
	email: "",
	password: "",
};

const SignInForm = () => {
	const [formData, setFormData] = useState(defaultFormData);
	const { email, password } = formData;

	const handleFormInput = (event) => {
		const { name, value } = event.target;
		setFormData({ ...formData, [name]: value });
	};

	const logGoogleUser = async () => {
		const { user } = await signInWithGooglePopup();
		const userDocRef = await createUserDoc(user);
	};

	const handleSubmit = async (event) => {
		event.preventDefault();
		console.log(formData);

		// try {
		// 	const { user } = await createAuthUserWithEmailAndPassword(
		// 		email,
		// 		password
		// 	);
		// 	await createUserDoc(user, { displayName });
		// 	resetFormData();
		// } catch (error) {
		// 	if (error.code === "auth/email-already-in-use") {
		// 		alert("Cannot create user, email already in use");
		// 	}
		// 	console.log("user creation created an error ", error);
		// }
	};

	const resetFormData = () => {
		setFormData(defaultFormData);
	};

	return (
		<div className="sign-in-container">
			<h2>I already have an account</h2>
			<span>Sign in with your email and password</span>
			<form onSubmit={handleSubmit}>
				<FormInput
					label="Email"
					type="email"
					required
					onChange={handleFormInput}
					name="email"
					value={email}
				/>

				<FormInput
					label="Password"
					type="password"
					required
					onChange={handleFormInput}
					name="password"
					value={password}
				/>
				<div className="buttons-container">
					<Button type="submit">Sign in</Button>
					<Button buttonType="google" onClick={logGoogleUser}>
						Google Login
					</Button>
				</div>
			</form>
		</div>
	);
};

export default SignInForm;
