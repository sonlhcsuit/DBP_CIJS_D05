import React from 'react'
import '../assets/css/Sidebar.css'
import { getUser } from '../Controllers/TodoControllers'

export function Sidebar(props) {
    
    return (
        <div className="sidebar border container col">
            <div className="avatar-cont container middle">
                <img className="avatar-image" src={props.profilePic} />
            </div>
            <div className="option-cont container col">
                <div className="option" style={{ color: "red" }}>
                    <i className="fal fa-user fa-2x"></i>
                    <p> Account</p>
                </div>
                <div className="option " onClick={props.signOut}>
                    <i className="fal fa-sign-out fa-2x"></i>

                    <p > Sign Out</p>
                </div>
            </div>

        </div>
    )
}