import { createContext, useState, useEffect } from "react";
import {
	onAuthStateChangeListener,
	signOutUser,
  createUserDoc
} from "../utils/Firebase/firebase.utils";

export const UserContext = createContext({
	currentUser: null,
	setCurrentUser: () => null,
  
});

export const UserProvider = ({ children }) => {
	const [currentUser, setCurrentUser] = useState(null);
	const value = { currentUser, setCurrentUser };

	useEffect(() => {
		const unsubscribe = onAuthStateChangeListener((user) => {
			console.log(user);
			if (user) {
				createUserDoc(user);
			}
			setCurrentUser(user);
		});

		return unsubscribe;
	}, []);

	return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
