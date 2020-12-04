import React, { Component } from 'react';
import Square from './components/Square'
import './App.css';
import beanBaby from './assets/beanBaby.png'

export default class App extends Component {
  constructor(props) {
    super(props)
      this.state= {
        squares: [...Array(9).fill("?")],
        jellyBeanLoc: null,
        snailLoc: null,
        counter: [...Array(5).fill("💧")],
        clickedBoxes: []
      }
  }

  startGame = () => {
    document.getElementById("button").innerHTML = "Try again"
    let bean = Math.floor(Math.random() * 9)
    let snail = Math.floor(Math.random() * 9)
    if(bean === snail) {
      snail = Math.floor(Math.random() * 9)
      bean = Math.floor(Math.random() * 9)
    }
    this.setState({
      squares: [...Array(9).fill("?")],
      jellyBeanLoc: bean,
      snailLoc: snail,
      counter: [...Array(5).fill("💧")],
      clickedBoxes: []
    })
    console.log("bean", bean, "snail", snail);
  }

  gameLogic = (loc) => {
    let { squares, counter, jellyBeanLoc, snailLoc, clickedBoxes } = this.state
    let newCounter = counter.slice()
    newCounter.pop()
    if(jellyBeanLoc !== null && snailLoc !== null) {
      if(! clickedBoxes.includes(loc)){
        if(counter.length > 1) {
          this.setState({
            squares: squares.map((value, index) => {
              if(loc === jellyBeanLoc && loc === index) {
                alert("winner!")
                return "🎉"
              } else if(loc === snailLoc && loc === index) {
                alert("You stepped on a snail! You go home to cry over your guilt.")
                return "🐌"
              } else if(loc === index) {
                return "👣"
              } else {
                return value
              }
            }),
            counter: newCounter,
            clickedBoxes: [...clickedBoxes, loc]
          })
        } else {
          alert("Miss Greta died becasue she cried too much")
          this.setState({ jellyBeanLoc: null, snailLoc: null })
        }
      }
      console.log(clickedBoxes);
    }
    if(loc === jellyBeanLoc || loc === snailLoc) {
      this.setState({ jellyBeanLoc: null, snailLoc: null })
    }
  }

  render() {
    let { squares, counter } = this.state
    let grid = squares.map((value, index) => {
      return (
        <Square
          value={ value }
          index={ index }
          key={ index }
          gameLogic={ this.gameLogic }
        />
      )
    })
    return(
      <>
        <div id="board">
          <div id="column1">
            <div id="intro">
              <h1>The Jelly Bean Crisis</h1>
              <p>Help Miss Greta find her jelly beans! They fell out of the window all over the yard and she is too distraught to search herself. Find all the jelly beans before Miss Greta runs out of tears and dies. Oh and keep an eye out for snails!</p>
              <p>
              - Miss Greta
              </p>
              <button onClick={ this.startGame } id="button">
                Start Game
              </button>
            </div>
          </div>
          <div id="column2">
            <div id="grid">
              { grid }
            </div>
            <h4>Tears Remaining</h4>
            <p id="counter">{ counter }</p>
          </div>
        </div>
      </>
    )
  }
}
