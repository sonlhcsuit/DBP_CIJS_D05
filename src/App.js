import './App.css';
import { Card } from './Components/Card'
import { Component } from 'react'
import { makeData } from "./ultis/data";

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: makeData(),
      selected: []
    }
    this.select = this.select.bind(this)
    this.flip = this.flip.bind(this)
    this.check = this.check.bind(this)
    this.fold = this.fold.bind(this)
  }
  fold(time) {
    // time is delay time for player watching image
    setTimeout(() => {
      this.setState(oldState => {
        let newState = JSON.parse(JSON.stringify(oldState))
        newState.data = newState.data.map((pokemon) => {
          return {
            ...pokemon,
            isSelected: false,
          }
        })
        return newState
      })
    }, time)

  }
  check() {
    let selected = this.state.data.filter(({ isSelected }) => isSelected === true)
    if (selected.length === 2) {
      if (selected[0].front === selected[1].front) {
        console.log('match')
        // change selected cards to finish state, not allowed to selected again
        setTimeout(() => {
          this.setState((oldState) => {
            let newState = JSON.parse(JSON.stringify(oldState))
            newState.data = newState.data.map(poke => {
              if (poke.front === selected[0].front) {
                poke.isFinish = true
              }
              return poke
            })
            return newState
          })
        },500)
      }
      this.fold(500)
    } else {
      console.log('pass')
    }
  }

  select(indx) {
    this.setState((oldState) => {
      let newState = JSON.parse(JSON.stringify(oldState))
      if (!newState.data[indx].isFinish) {
        newState.data[indx].isSelected = !newState.data[indx].isSelected
      }
      return {
        ...newState
      }
    }, this.check)
  }
  flip(indx, val) {
    // console.log(`flip ${indx} ${val}`)
    this.setState(oldState => {
      let data = JSON.parse(JSON.stringify(oldState.data))
      data[indx].isFlip = val
      return {
        data: data
      }
    })
  }

  render() {
    return (
      <div className="app-cont ">
        {
          this.state.data.map((link, indx) => {
            return <Card {...link} indx={indx} key={indx} select={this.select} flip={this.flip} />
          })
        }
      </div>
    );
  }
}
export default App
