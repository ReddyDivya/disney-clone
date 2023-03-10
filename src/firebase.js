import firebase from 'firebase';

// Your web app's Firebase configuration
const firebaseConfig = {

    apiKey: "AIzaSyAd97UTsdBIU1NMpoPjf8aQDBm1MTxsuUQ",
    authDomain: "disneyplus-clone-b784f.firebaseapp.com",
    projectId: "disneyplus-clone-b784f",
    storageBucket: "disneyplus-clone-b784f.appspot.com",
    messagingSenderId: "961396864455",
    appId: "1:961396864455:web:2416a420d92227d36315e2",
    measurementId: "G-Y3S9131VPV"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
/*Cloud Firestore stores data in Documents, which are stored in Collections.*/
const db = firebaseApp.firestore();

// Initialize Firebase Authentication and get a reference to the service
/*Firebase Authentication to allow users to sign in to our app using one or more sign-in methods(email & password*/
const auth = firebase.auth();

// Users authenticate with Firebase using their Google Accounts
const provider = new firebase.auth.GoogleAuthProvider();

const storage = firebase.storage();

export { auth, provider, storage };
export default db;
