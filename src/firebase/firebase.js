import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
	apiKey: "AIzaSyBr02IIPS9fBokAwvjouLgkyjOSYI1udWI",
	authDomain: "crwn-db-d4821.firebaseapp.com",
	databaseURL: "https://crwn-db-d4821.firebaseio.com",
	projectId: "crwn-db-d4821",
	storageBucket: "crwn-db-d4821.appspot.com",
	messagingSenderId: "233509175781",
	appId: "1:233509175781:web:e503ba36f8f5957f2baf0c",
	measurementId: "G-DEZBQ2E3N7"
};

export const createUserProfileDoc = async (userAuth, additionalData) => {
	if (!userAuth) return;

	const userRef = firestore.doc(`users/${userAuth.uid}`);
	const snapShot = await userRef.get();

	if (!snapShot.exists) {
		const { displayName, email } = userAuth;
		const createdAt = new Date();

		try {
			await userRef.set({
				displayName,
				email,
				createdAt,
				...additionalData
			});
		} catch (error) {
			console.log('Error creating user: ', error.message);
		}
	}

	return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;