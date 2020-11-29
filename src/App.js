import React from 'react'
import './App.css';
import { Header } from './Components/Header'
import { SearchBar } from './Components/SearchBar'
import { emojiList } from './resources/emojiList'
import { filterEmoji } from './Controllers/emojiUltis'
import { EmojiList } from './Components/EmojiList'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
    // this.createEmojis = this.createEmojis.bind(this)
    this.handleInput = this.handleInput.bind(this)
  }

  handleInput(event) {
    this.setState({ searchText: event.target.value })
  }

  render() {
    let filteredEmojis = filterEmoji(this.state.searchText, emojiList)

    return (
      <React.Fragment>
        <Header />
        <SearchBar onChange={this.handleInput} />
        <EmojiList emojis={filteredEmojis} />
      </React.Fragment>

    );
  }

}

export default App;
