import React, { Component } from 'react';
import './App.css';
import Valentines from './Valentines'
import BadMatch from './BadMatch'

export default class App extends Component{
  constructor(props){
    super(props)
    // The state object holds information that can be displayed to the user and updated throughout the program
    this.state = {
      // The percentage will be calculated with the calculatePercentage function below. For now, it is set as a neutral, empty string
      percentage: "",
      // The handleChange methods update userName and loveName as the user types
      userName: "",
      loveName: ""
    }
  }

  handleChangeUser = (e) => {
    // This method takes the input and saves the value in this.state.userName so we can use the input in our program
    // no need to modify this method
    this.setState({ userName: e.target.value })
  }

  handleChangeLove = (e) => {
    // This method takes the input and saves the value in this.state.loveName so we can use the input in our program
    // No need to modify this method
    this.setState({ loveName: e.target.value })
  }

  restartGame = () => {
    // This method restarts the game by resetting this.state to it's original values.
    // No need to modify this method
    this.setState({
      percentage: "",
      userName: "",
      loveName: ""
    })
  }

  calculatePercentage = () => {
    // You will do most of your logic in this method. It is up to you how you would like the calculation to work. Random numbers? Number of vowels in each name? The world is your oyster.
    let percentage = 11
    // You will want to set the state of "percentage" in this function so that it renders on the page as expected.
    this.setState({ percentage: percentage })
  }



  render(){

    // Destructuring this.state so that you may just use the following variables throughout your code
    let { percentage,
          userName,
          loveName
        } = this.state

    return(
      <React.Fragment>

        <div id = "all">
          <h1 id = "title"> Love-O-Meter </h1>

          {/* User input field - every DOM event that happens in the input will call the handleChange methods and update state */}
          <input
            id = "userName"
            onChange = { this.handleChangeUser }
            value = { userName }
            placeholder = "Your name"
          />
          <span id = "plus"> + </span>
          <input
            id = "loveName"
            onChange = { this.handleChangeLove }
            value = { loveName }
            placeholder = "Your love's name"
          />
          <br/>

          {/* Button that calls the calculatePercentage method */}
          <button
            id = "submitButton"
            type = "submit"
            onClick = { this.calculatePercentage }
          >
          Submit!
          </button>
          <br/>

          {/* Button that calls the restartGame method */}
          <button
            id = "restartButton"
            type = "submit"
            onClick = { this.restartGame }
          >
          Try a different pair!
          </button>

          <div className = "results">
            <p> Your compatibility percentage! </p>

            <textarea
              id = "compatibility"
              placeholder = "???"
              value = { percentage }
            />

            {/* Conditional rendering, based on the return value of calculatePercentage */}
            {/* Feel free to go in and change the values here to fall in line with your desired matching criteria */}
            { percentage <= 10 && percentage > 0 &&
              <div>
                <BadMatch />
              </div>
            }

            { percentage > 10 &&
              <div>
                <Valentines />
              </div>
            }

          </div>

          {/* Go ahead and customize this info! */}
          <footer> [Dev name here] | LEARN Academy Alpha 2020 </footer>
        </div>

      </React.Fragment>
    )
  }
}
