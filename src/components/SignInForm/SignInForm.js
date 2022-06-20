import { useState } from "react";
import {
	signInWithGooglePopup,
	signInAuthUserWithEmailAndPassword,
} from "../../utils/Firebase/firebase.utils";
import FormInput from "../FormInput/FormInput";
import Button, { buttonTypeClasses } from "../Button/Button";
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

	const signInWithGoogle = async () => {
		await signInWithGooglePopup();
	};

	const handleSubmit = async (event) => {
		event.preventDefault();

		try {
			await signInAuthUserWithEmailAndPassword(email, password);

			resetFormData();
		} catch (error) {
			switch (error.code) {
				case "auth/wrong-password":
					alert("Incorrect password");
					break;
				case "auth/user-not-found":
					alert("No user associated with this email");
					break;
				default:
					console.log(error);
			}
		}
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
					<Button
						type="button"
						buttonType={buttonTypeClasses.google}
						onClick={signInWithGoogle}
					>
						Google Login
					</Button>
				</div>
			</form>
		</div>
	);
};

export default SignInForm;
