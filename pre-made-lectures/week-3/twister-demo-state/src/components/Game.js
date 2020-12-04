import React, { Component } from 'react';
import twisterLogo from '../assets/twister.png'

export default class Game extends Component {
  constructor(props) {
    super(props)
    // State is an object that stores a component's dynamic data and determines how the component renders and behaves.
    // state will likely often update and change throughout the users' interaction with your app. However, we never update state directly. We update state using a JS method called setState().
      this.state = {
        currentPosition: "",
        bodyPlacementOptions: ["L🖐🏻", "R🤚🏻", "L🦶🏻", "R🦶🏻"],
        colorOptions: ["🔴", "🔵", "🟢", "🟣"],
        logo: twisterLogo
      }
  }

  handleChange = () => {
    let { bodyPlacementOptions, colorOptions } = this.state
    // create 2 random numbers to pick a body part and a color
    let bodyPosition = bodyPlacementOptions[Math.floor(Math.random() * 4)]
    let colorPosition = colorOptions[Math.floor(Math.random() * 4)]
    // return both of those things as a string
    let newPosition = `${ bodyPosition }${ colorPosition }`
    // update the state "currentPosition" based on the return
    this.setState({ currentPosition: newPosition })
  }

  render() {
    const headerStyle = {
      color: "white",
      backgroundColor: "pink",
      fontFamily: "Arial"
    }
    return(
      <>
        <img
          src={ this.state.logo }
          style={{ height: "50px"}}
        />
        <br/>
        <button onClick={ this.handleChange }>
          Click me!
        </button>
        <div>
          { this.state.currentPosition }
        </div>
      </>
    )
  }
}
