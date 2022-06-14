import { React, useState, useContext } from "react";
import {
	createUserDoc,
	signInWithGooglePopup,
    signInAuthUserWithEmailAndPassword,
} from "../../utils/Firebase/firebase.utils";
import FormInput from "../FormInput/FormInput";
import Button from "../Button/Button";
import "./SignInForm.scss";
import {UserContext} from '../../context/user.context';

const defaultFormData = {
	email: "",
	password: "",
};

const SignInForm = () => {
	const [formData, setFormData] = useState(defaultFormData);
	const { email, password } = formData;
	const {setCurrentUser} = useContext(UserContext)

	const handleFormInput = (event) => {
		const { name, value } = event.target;
		setFormData({ ...formData, [name]: value });
	};

	const signInWithGoogle = async () => {
		const { user } = await signInWithGooglePopup();
		await createUserDoc(user);
	};

	const handleSubmit = async (event) => {
		event.preventDefault();
		console.log(formData);
        try {
            const {user} = await signInAuthUserWithEmailAndPassword(email, password)
            
            resetFormData();
			setCurrentUser(user);
        }
        catch(error) {
            switch (error.code) {
                case 'auth/wrong-password': 
                    alert('Incorrect password')
                    break
                case 'auth/user-not-found':
                    alert('No user associated with this email')
                    break;
                default:
                    console.log(error)
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
					<Button type='button' buttonType="google" onClick={signInWithGoogle}>
						Google Login
					</Button>
				</div>
			</form>
		</div>
	);
};

export default SignInForm;
