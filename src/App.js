import './App.css';
import React from 'react'
import { Main } from './Components/Main'
import { Search } from './Components/Search'
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  search = (e) => {
    const apiKey = 'e03ee621-2bc3-46e1-bf40-bdfa1ac36620'

    let url = `https://api.globalgiving.org/api/public/services/search/projects?api_key=${apiKey}&q=${e.target.value}`

    if (e.key == 'Enter') {
      fetch(url, {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      })
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
