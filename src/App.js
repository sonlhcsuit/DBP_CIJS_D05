import './App.css';
import React from 'react'
import { Main } from './Components/Main'
import { Search } from './Components/Search' 
import { searchBook } from "./ultis/ultis";
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  search = (e) => {
    if (e.key == 'Enter') {
      searchBook(e.target.value)
      .then(data => {
        console.log(data)
        this.setState({ books: data.items })
      })
    }
    console.clear()
  }
  render() {
    return (
      <div className="App border">
        <Search search={this.search} />
        <Main books={this.state.books?this.state.books:[]} />
      </div>
    );
  }
}

export default App;
