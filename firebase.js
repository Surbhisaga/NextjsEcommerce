import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'
import Router from 'next/router';

const firebaseConfig = {
    apiKey: "AIzaSyCXihXJOqdnGf4xKZ-Rcz-CotONBkC489k",
    authDomain: "nextjsecommerce.firebaseapp.com",
    databaseURL: "https://nextjsecommerce-default-rtdb.firebaseio.com",
    projectId: "nextjsecommerce",
    storageBucket: "nextjsecommerce.appspot.com",
    messagingSenderId: "520546032216",
    appId: "1:520546032216:web:4c54326acf387ea6e7882d"
};
if (!firebase.apps.length)
    firebase.initializeApp(firebaseConfig)

const auth = firebase.auth()
const db = firebase.firestore()
const storage = firebase.storage()
const googleProvider = new firebase.auth.GoogleAuthProvider()
const serverTimeStamp = firebase.firestore.FieldValue.serverTimestamp
export const signInWithGoogle = () =>{
    auth.signInWithPopup(googleProvider).then((res)=>{
        Router.push("/my-account")
    }).catch((error)=>{
        console.log(error.message)
    })
}

export { auth, db, storage ,serverTimeStamp}
