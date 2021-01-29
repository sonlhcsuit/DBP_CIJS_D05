import React from 'react'
import './App.css';
import { Navigation } from './Components/Navigation'
import { SideBar } from './Components/SideBar'
import { TodoList } from './Components/TodoList'
import { SignIn } from './Components/SignIn'
import { SignUp } from './Components/SignUp'
let availableRoute = ['/signin', '/signup', '/forgot', '/',]
class App extends React.Component {
  constructor(props) {
    super(props)
    // always go to sign in first
    let pathName = window.location.pathname
    console.log(pathName)

    if (availableRoute.indexOf(pathName) == -1) pathName = '/'
    this.state = {
      at: pathName
    }
  }
  isLoggedIn() {
    const user = localStorage.getItem('user')
    return user
  }

  signOut() {
    localStorage.clear()
    window.location.assign('/')
  }
  componentDidMount() {
    // or fetching data from here
    if (localStorage.getItem('user') !== null) this.setState({ user: JSON.parse(localStorage.getItem('user')) })
  }
  render() {
    console.log('render App')

    // If user are at home and didnt logged in , navigate to sign in 
    if (this.state.at == '/' && !this.isLoggedIn()) {
      window.location.assign('/signin')
      return <></>
    }
    
    let location = {
      '/signup': <SignUp signIn={this.signIn} />,
      '/signin': <SignIn forgotPassword={this.forgotPassword} signUp={this.signUp} />,
      '/': <>
        <SideBar {...this.state?.user} signOut={this.signOut} />
        <TodoList {...this.state?.user} />
      </>
    }
    return (
      <div className="App">
        <Navigation />
        <div className="main">
          {
            location[this.state.at]
          }
        </div>
      </div>



    )
  }
}




export default App;
