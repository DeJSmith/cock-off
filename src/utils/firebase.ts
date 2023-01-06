import * as firebase from "firebase/app";
import "firebase/firestore";
import { getFirestore, collection } from "firebase/firestore";

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_KEY,
    authDomain: "cock-off.firebaseapp.com",
    projectId: "cock-off",
    storageBucket: "cock-off.appspot.com",
    messagingSenderId: "280458616374",
    appId: process.env.REACT_APP_FIREBASE_APP_ID,
};

const app = firebase.initializeApp(firebaseConfig);

export const db = getFirestore(app);
