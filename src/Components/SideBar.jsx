import React from 'react'
import '../assets/css/SideBar.css'

export function SideBar(props) {
    let { avatar } = props
    avatar = avatar || 'https://firebasestorage.googleapis.com/v0/b/mindx-cijs.appspot.com/o/pokeball.png?alt=media&token=5ed18a00-8ab0-4737-8d21-996a35640673'
    return (
        <div className="border sidebar-cont ">
            <img className="profile-image" src={avatar} />
            <div className="option">
                <i className="fal fa-user fa-2x"></i>
                <p> Account</p>
            </div>
            <div className="option " onClick={props.signOut}>
                <i className="fal fa-sign-out fa-2x"></i>
                <p > Sign Out</p>
            </div>
        </div>
    )
}