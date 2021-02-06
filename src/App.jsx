import React from 'react'
import { SignIn } from './Components/SignIn'
import { SignUp } from './Components/SignUp'
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props)

  }
  navigate = (path) => {
    window.history.pushState(null, null, path)
    this.forceUpdate()
  }

  render() {
    const path = window.location.pathname == '/' ? '/signin' : window.location.pathname

    const options = {
      '/signup': <SignUp navigate={this.navigate} />,
      '/signin': <SignIn navigate={this.navigate} />

      // '/forgot':<For
    }
    return (
      <div className="App">
        <div className="main">
          {
            options[path]
          }
        </div>
      </div>



    )
  }
}




export default App;
