import firebase from 'firebase/app'
import "firebase/auth";
import 'firebase/firestore'
import firebaseui from "firebaseui";
import { firebaseConfig } from '../config/firebase.config'

try {
    firebase.initializeApp(firebaseConfig);
} catch (e) {
    console.log(e.message)
}
const auth = firebase.auth
const db = firebase.firestore()
export { db,auth }