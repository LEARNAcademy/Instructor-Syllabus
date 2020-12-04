import React, { Component } from 'react';
import './App.css'
import Game from './components/Game'

export default class App extends Component {
  // in this example, our App.js does not hold state
  render() {
    return(
      <>
        <Game />
      </>
    )
  }
}
