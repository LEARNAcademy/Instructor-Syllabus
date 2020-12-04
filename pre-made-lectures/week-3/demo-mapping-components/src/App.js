import React, { Component } from 'react';
import './App.css'
import Box from './components/Box'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      boxesArray: [...Array(9).fill("?")]
    }
  }
  render() {
    let { boxesArray } = this.state
    let boxes = boxesArray.map((box, index) => {
      return(
        <Box
          questionMark={ box }
          index={ index }
          key={ index }
        />
      )
    })
    return(
      <>
        <h1>Mapping Components</h1>
        <div id="gameBoard">
         { boxes }
        </div>
      </>
    )
  }
}
