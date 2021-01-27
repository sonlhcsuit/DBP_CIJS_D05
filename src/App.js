import './App.css';
import React from 'react'
import { Main } from './Components/Main'
import { Search } from './Components/Search'
import { searchCharity } from "./ultis/ultis"
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  search = (e) => {
    
    if (e.key == 'Enter') {
      searchCharity(e.target.value)
        .then(res => res.json())
        .then(data => {
          console.log(data)
          this.setState({ projects: data.search.response.projects.project })
        })
        .catch(er=>{
          console.log(e)
          this.setState({projects:[]})
        })
    }
  }
  render() {
    return (
      <div className="App border">
        <Search search={this.search} />
        <Main projects={this.state.projects ? this.state.projects : []} />
      </div>
    );
  }
}

export default App;
