import React from 'react'
import './App.css';
import { Header } from './Components/Header'
import { Sidebar } from './Components/Sidebar'
import { Todolist } from './Components/Todolist'
import { SignIn } from './Components/SignIn'
import { UserContext } from './Contexts/UserContext'
let avt = "https://s.luyengame.net/games/pikachu/image.jpg"
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = { userId: null }
    this.signOut = this.signOut.bind(this)

  }
  static contextType = UserContext
  signIn(){
    
  }
  signOut() {
    this.setState({userId:null})
    localStorage.clear()
  }
  componentDidMount() {
    if (localStorage.getItem('userId') === undefined) {
      this.setState({ userId: null })
    } else {
      this.setState({ userId: localStorage.getItem('userId') })
    }
  }
  render() {
    if (this.state.userId !== null) {
      return (
        <div className="App">
          <Header />
          <div className="main">
            <Sidebar profilePic={avt} signOut={this.signOut} />
            <Todolist userId={this.state.userId} />
          </div>
        </div>

      )
    } else {
      return (
        <div className="App">
          <Header />
          <div className="main">
            <Sidebar profilePic={avt} signOut={this.signOut} />
            <SignIn />
          </div>
        </div>

      )
    }
    // return (
    //   <UserContext.Provider value="heheh">
    //     <div className="App">
    //       <Header />
    //       <div className="main">
    //         <Sidebar profilePic={avt} signOut={this.signOut} />
    //         {/* <UserContext.Consumer>

    //         </UserContext.Consumer> */}
    //         {/* {console.log(this.context)} */}
    //       </div>
    //     </div>
    //   </UserContext.Provider>
    // )
  }
}




export default App;
