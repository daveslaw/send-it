import { initializeApp } from "firebase/app";
import {
	getAuth,
	signInWithRedirect,
	signInWithPopup,
	GoogleAuthProvider,
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyDC_I98O1lMi43xi6QiTbVx7yd7hFa2DUc",
	authDomain: "send-it-db-9228d.firebaseapp.com",
	projectId: "send-it-db-9228d",
	storageBucket: "send-it-db-9228d.appspot.com",
	messagingSenderId: "195519684211",
	appId: "1:195519684211:web:437ac22500dac18ca01406",
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
	prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
export const signInWithGoogleRedirect = () =>
	signInWithRedirect(auth, provider);

export const db = getFirestore();

export const createUserDoc = async (userAuth, additionalInfo) => {
	if (!userAuth) return;
    const userDocRef = doc(db, "users", userAuth.uid);
	console.log(userDocRef);
	const userSnapshot = await getDoc(userDocRef);
	console.log(userSnapshot);

	if (!userSnapshot.exists()) {
		const { displayName, email } = userAuth;
		const createdAt = new Date();
		try {
			await setDoc(userDocRef, { displayName, email, createdAt, ...additionalInfo });
		} catch (error) {
			console.log("error creating the user", error.message);
		}
	}
	return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return

    return createUserWithEmailAndPassword(auth, email, password)
};

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return

    return signInWithEmailAndPassword(auth, email, password)
};

