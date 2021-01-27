import React from 'react'
import './App.css';
import { Navigation } from './Components/Navigation'
// import { SideBar } from './Components/Sidebar'
// import { Todolist } from './Components/TodoList'
import { SignIn } from './Components/SignIn'
import { SignUp } from './Components/SignUp'
// import { ForgotPassword } from './Components/ForgotPassword'
// import { temp } from './ultis/ultis'
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
  // switch to component
  // signUp() {
  //   this.setState({ at: 'signUp' })
  // }
  // forgotPassword() {
  //   this.setState({ at: 'forgotPassword' })
  // }
  // signIn() {
  //   this.setState({ at: 'signIn' })
  // }
  // signOut() {
  //   this.setState({ userId: null })
  //   localStorage.clear()
  //   window.location.reload()
  // }
  // // check user logged or not, if yes, to home page, or go to sign in page
  // componentDidMount() {
  //   if (localStorage.getItem('userId') === null) {
  //     this.setState({ userId: null, at: 'signIn'})
  //   } else {
  //     getUser(localStorage.getItem('userId')).then((data => {
  //       this.setState({ userId: localStorage.getItem('userId'), at: 'home', ...data })
  //     }))
  //   }
  // }
  render() {
    // base on where you are, render appropriate component
    // let location = {
    //   'signUp': <SignUp signIn={this.signIn} />,
    //   'signIn': <SignIn forgotPassword={this.forgotPassword} signUp={this.signUp} />,
    //   'forgotPassword': <ForgotPassword signIn={this.signIn} signUp={this.signUp} />,
    //   'home': <Todolist userId={this.state.userId} />
    // }

    // console.log(this.state)
    return (
      <div className="App">
        <Navigation />
        <div className="main">
          {/* <SideBar profilePic={this.state.avatar} signOut={this.signOut} /> */}
          {
            // location[this.state.at]
            // <SignIn/>
            <SignUp/>
          }


        </div>
      </div>



    )
  }
}




export default App;
