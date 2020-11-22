import React from 'react'
export const UserContext = React.createContext({
    userId:null,
    userSignIn: () => {console.log('sign in ') },
    userSignOut: () => { console.log('sign out ')},
    userSignUp: () => { console.log('sign up ')}
})