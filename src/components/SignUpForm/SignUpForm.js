import { React, useState } from "react";
import {
	createAuthUserWithEmailAndPassword,
	createUserDoc,
} from "../../utils/Firebase/firebase.utils";

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
            await createUserDoc(user, {displayName})
            resetFormData();
		} catch (error) {
            if (error.code === 'auth/email-already-in-use') {
                alert('Cannot create user, email already in use')
            }
			console.log("user creation created an error ", error);
		}
	};

    const resetFormData = () => {
        setFormData(defaultFormData)
    }

	return (
		<div>
			<h1>Sign up with your email and password</h1>
			<form onSubmit={handleSubmit}>
				<label>Display Name</label>
				<input
					type="text"
					required
					onChange={handleFormInput}
					name="displayName"
					value={displayName}
				></input>

				<label>Email</label>
				<input
					type="email"
					required
					onChange={handleFormInput}
					name="email"
					value={email}
				></input>

				<label>Password</label>
				<input
					type="password"
					required
					onChange={handleFormInput}
					name="password"
					value={password}
				></input>

				<label>Confirm Password</label>
				<input
					type="password"
					required
					onChange={handleFormInput}
					name="confirmPassword"
					value={confirmPassword}
				></input>
				<button type="submit">Sign up</button>
			</form>
		</div>
	);
};

export default SignUpForm;
