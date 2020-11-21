import React from 'react'
import './App.css';
import { Header } from './Components/Header'
import { Sidebar } from './Components/Sidebar'
import { Todolist } from './Components/Todolist'
let avt = "https://s.luyengame.net/games/pikachu/image.jpg"
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <div className="App">
        <Header />
        <div className="main">
          <Sidebar profilePic={avt} />
          <Todolist />
        </div>
      </div>
    )
  }
}

export default App;
