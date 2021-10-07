import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCgSlaWlwvpdlczOJ39TQxBTLCdd7KNQZM",
    authDomain: "gamil-clone-with-nathan.firebaseapp.com",
    projectId: "gamil-clone-with-nathan",
    storageBucket: "gamil-clone-with-nathan.appspot.com",
    messagingSenderId: "560695019982",
    appId: "1:560695019982:web:cc47eed71040d6f3cec39f"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const db = firebase.firestore();

export const provider = new firebase.auth.GoogleAuthProvider();
// provider.setCustomParameters({ prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default db;  