import firebase from 'firebase/compat/app';
import { initializeApp } from 'firebase-admin/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

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
const firebaseApp = initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;