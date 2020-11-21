import React from 'react'
import './App.css';
import { Header } from './Components/Header'
import { Sidebar } from './Components/Sidebar'
import { Todolist } from './Components/Todolist'
import { SignIn } from './Components/SignIn'
let avt = "https://s.luyengame.net/games/pikachu/image.jpg"
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
    if (localStorage.userId != undefined) {
      this.state = { isLoggedIn: true }
      console.log('logged in')
      // chuyen sang man hinh co todo
    } else {
      // chuyen sang man hinh dang ky dang nhap
      this.state = { isLoggedIn: false }
      console.log('not logged')
    }

  }
  render() {
    if (this.state.isLoggedIn) {
      return (
        <div className="App">
          <Header />
          <div className="main">
            <Sidebar profilePic={avt} />
            <Todolist />
          </div>
        </div>
      )
    } else {
      return (
        <div className="App">
          <SignIn />
          {/* <SignUp /> */}
        </div>
      )
    }
  }
}

export default App;
