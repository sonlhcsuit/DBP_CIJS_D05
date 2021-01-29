import React from 'react'
import './App.css';
import { Navigation } from './Components/Navigation'
import { SideBar } from './Components/SideBar'
import { TodoList } from './Components/TodoList'
import { SignIn } from './Components/SignIn'
import { SignUp } from './Components/SignUp'
import { Modal } from './Components/Modal'
import { TodoEditor } from './Components/TodoEditor';
let availableRoute = ['/signin', '/signup', '/forgot', '/',]
class App extends React.Component {
  constructor(props) {
    super(props)
    // always go to sign in first
    let pathName = window.location.pathname
    if (availableRoute.indexOf(pathName) == -1) pathName = '/'
    this.state = { userId: null, at: pathName }
  }
  isLoggedIn() {
    const user = localStorage.getItem('user')
    return !user
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
    console.log('render App')

    // If user are at home and didnt logged in , navigate to sign in 
    if (this.state.at == '/' && this.isLoggedIn()) {
      window.location.assign('/signin')
      return <></>
    }

    let location = {
      '/signup': <SignUp signIn={this.signIn} />,
      '/signin': <SignIn forgotPassword={this.forgotPassword} signUp={this.signUp} />,
      '/': <TodoList userId={this.state.userId} />

    }
    return (
      <div className="App">
        <Navigation />
        <div className="main">
          {/* <SideBar 
          profilePic={this.state.avatar} signOut={this.signOut}
           /> */}
          {
            location[this.state.at]
          }
        </div>
      </div>



    )
  }
}




export default App;
