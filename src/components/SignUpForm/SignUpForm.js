import { useState } from "react";
import {
	createAuthUserWithEmailAndPassword,
	createUserDoc,
} from "../../utils/Firebase/firebase.utils";
import FormInput from "../FormInput/FormInput";
import "./SignUpForm.scss";
import Button from "../Button/Button";

const defaultFormData = {
	displayName: "",
	email: "",
	password: "",
	confirmPassword: "",
};

const SignUpForm = () => {
	const [formData, setFormData] = useState(defaultFormData);
	const { displayName, email, password, confirmPassword } = formData;

	const handleFormInput = (event) => {
		const { name, value } = event.target;
		setFormData({ ...formData, [name]: value });
	};

	const handleSubmit = async (event) => {
		event.preventDefault();
		if (password !== confirmPassword) {
			alert("Passwords do not match");
			return;
		}
		try {
			const { user } = await createAuthUserWithEmailAndPassword(
				email,
				password
			);
			await createUserDoc(user, { displayName });
			resetFormData();
		} catch (error) {
			if (error.code === "auth/email-already-in-use") {
				alert("Cannot create user, email already in use");
			}
			console.log("user creation created an error ", error);
		}
	};

	const resetFormData = () => {
		setFormData(defaultFormData);
	};

	return (
		<div className="sign-up-container">
			<h2>Don't have an account?</h2>
			<span>Sign up with your email and password</span>
			<form onSubmit={handleSubmit}>
				<FormInput
					label="Display Name"
					type="text"
					required
					onChange={handleFormInput}
					name="displayName"
					value={displayName}
				/>

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

				<FormInput
					label="Confirm Password"
					type="password"
					required
					onChange={handleFormInput}
					name="confirmPassword"
					value={confirmPassword}
				/>
				<Button type="submit">Sign up</Button>
			</form>
		</div>
	);
};

export default SignUpForm;
