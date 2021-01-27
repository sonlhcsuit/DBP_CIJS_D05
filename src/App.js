import React from 'react'
import './App.css';
import { Searchbar } from './Components/Searchbar'
import { Record } from './Components/Record'
import { searchCity } from "./ultis/ultis";
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      cities: []
    }
    this.handleKeyDown = this.handleKeyDown.bind(this)

  }
  
  handleKeyDown(e) {
    if (e.key === 'Enter') {
      searchCity(e.target.value)
        .then(data => {
          let cities = this.state.cities
          cities.push({
            citiname: data.name,
            temperature: data.main.temp_max,
            status: data.weather[0].description.toUpperCase()
          })
          this.setState({ cities: cities })
        })
        .catch(er=>{
          alert("City not found")
        })
    }
  }
  render() {
    return (
      <>
        <div className="search">
          <Searchbar className="search" onKeyDown={this.handleKeyDown} />
        </div>
        <div className="results">
          {this.state.cities.map((city, ind) => <Record {...city} key={ind} />)}
        </div>
      </>
    )
  }
}

export default App;
