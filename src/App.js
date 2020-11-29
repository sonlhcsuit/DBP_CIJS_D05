import logo from './logo.svg';
import React from 'react'
import './App.css';
import { Searchbar } from './Components/Searchbar'
import { Record } from './Components/Record'
const apiKey = "4d8fb5b93d4af21d66a2948710284366";
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      cities: [
      ]

    }
    this.handleKeyDown = this.handleKeyDown.bind(this)
    this.searchCity = this.searchCity.bind(this)
  }
  searchCity(cityName) {
    return fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`)
      .then(res => res.json())
  }
  handleKeyDown(e) {
    if (e.key == 'Enter') {
      this.searchCity(e.target.value)
        .then(data => {
          let cities = this.state.cities
          cities.push({
            citiname: data.name,
            temperature: data.main.temp_max,
            status: data.weather[0].description.toUpperCase()
          })
          this.setState({ cities: cities })
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
