import React from 'react'
import './App.css';
import { Navigation } from './Components/Navigation'
import { SignIn } from './Components/SignIn'
import { SignUp } from './Components/SignUp'

import { Modal } from './Components/Modal'

class App extends React.Component {
  constructor(props) {
    super(props)
    // always go to sign in first
    // this.state = { userId: null, at: 'signIn' }
    // this.signOut = this.signOut.bind(this)
    // this.signUp = this.signUp.bind(this)
    // this.forgotPassword = this.forgotPassword.bind(this)
    // this.signIn = this.signIn.bind(this)

  }
 
  render() {

    return (
      <div className="App">
        <Navigation />
        <div className="main">
          {
            <SignUp/>
          }
        </div>
      </div>



    )
  }
}




export default App;
