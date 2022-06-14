import { React, useState } from "react";

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
        setFormData({...formData, [name]: value})
	};

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(formData)
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
