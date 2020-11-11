import logo from './logo.svg';
import './App.css';
import { Header } from './Components/Header'
import { SearchBar } from './Components/Searchbar'
import { Emoji } from './Components/Emoji'
import React from 'react'
import { emojiList } from './resources/emojiList'


console.log(emojiList)
function App() {
  let elist_ = []
  for (let i = 0; i < 20; i++) {
    elist_.push(
      <Emoji symbol={emojiList[i].symbol} title={emojiList[i].title} />
    )
  }


  return (
    <React.Fragment>
      <Header />
      <SearchBar />
      { elist_}
    </React.Fragment>

  );
}

export default App;
