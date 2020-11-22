import React from 'react'
import './App.css';
import { Header } from './Components/Header'
import { Sidebar } from './Components/Sidebar'
import { Todolist } from './Components/Todolist'
// import { SignIn } from './Components/SignIn'
import { UserContext } from './Contexts/UserContext'
let avt = "https://s.luyengame.net/games/pikachu/image.jpg"
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}

  }
  static contextType = UserContext
  render() {
    // let temp = {
    //   userId: 'heh',
    //   userSignIn: () => { console.log('sign in ') },
    //   userSignOut: () => { console.log('sign out ') },
    //   userSignUp: () => { console.log('sign up ') }
    // }
    console.log(this.context)
    return (
      <UserContext.Provider >
        <div className="App">
          <Header />
          <div className="main">
            <Sidebar profilePic={avt} />
            <UserContext.Consumer>
              {(value)=>{
                console.log(value)
                return(
                  <Todolist/>
                )
              }}
            </UserContext.Consumer>
            {/* {console.log(this.context)} */}
          </div>
        </div>
      </UserContext.Provider>
    )

    //   if (this.state.isLoggedIn) {
    //     return (
    // <div className="App">
    //   <Header />
    //   <div className="main">
    //     <Sidebar profilePic={avt} />
    //     <Todolist />
    //   </div>
    // </div>
    //     )
    //   } else {
    //     return (
    //       <div className="App">
    //         <SignIn />
    //         {/* <SignUp /> */}
    //       </div>
    //     )
    //   }
  }

}

export default App;
