import { initializeApp } from "firebase/app";
import {
	getAuth,
	signInWithDirect,
	signInWithPopup,
	GoogleAuthProvider,
} from "firebase/auth";

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
