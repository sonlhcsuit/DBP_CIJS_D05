// import logo from './logo.svg';
import './App.css';
import { Header } from './Components/Header'
import { SearchBar } from './Components/Searchbar'

import React from 'react'
import { emojiList } from './resources/emojiList'
import {createEmojis,filterEmoji} from './Ultis/emojiUltis'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
    // this.createEmojis = this.createEmojis.bind(this)
    this.handleInput = this.handleInput.bind(this)
  }

  handleInput(event){
    this.setState({searchText:event.target.value})
  }
  
  render() {
    let elist = createEmojis(filterEmoji(this.state.searchText,emojiList))
    return (
      <React.Fragment>
        <Header />
        <SearchBar onChange={this.handleInput} />
        { elist}
      </React.Fragment>

    );
  }

}

export default App;
