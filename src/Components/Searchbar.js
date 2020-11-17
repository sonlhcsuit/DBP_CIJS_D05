import "firebase/auth";
import '../assets/css/searchbar.css'
import "firebase/firestore";
import React from 'react'


export function SearchBar(props) {


    return (
        <input onChange={props.onChange} className="full" type="text" placeholder="Enter your emoji..." />
    )

}