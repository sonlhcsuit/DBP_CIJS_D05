import "firebase/auth";
import '../assets/css/searchbar.css'
import "firebase/firestore";
import firebase from 'firebase/app'
import { firebaseConfig } from '../config/firebase.config'
import React from 'react'
// di theo nhom
// try{
//     firebase.initializeApp(firebaseConfig);
// }catch(e){
//     console.log(e.message)
// }

// const db = firebase.firestore();


export function SearchBar(props) {


    return (
        <input onChange={props.onChange} className="full" type="text" placeholder="Enter your emoji..." />
    )

}