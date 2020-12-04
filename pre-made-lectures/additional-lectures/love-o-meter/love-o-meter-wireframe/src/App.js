import React, { Component } from 'react';
import './App.css';
import GoodMatch from './components/GoodMatch'
import BadMatch from './components/BadMatch'

export default class App extends Component {
  constructor(props){
    super(props)
    // The state object holds information that can be displayed to the user and updated throughout the program
    this.state = {
      // The handleChange methods update userName and loveName as the user types
      tempKey: "",
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

  // Add a method here that returns information to your user by adding a key:value pair to the state object. This method should utilize the user inputs established in state.

  render(){

    // Destructuring this.state so that you may just use the following variables throughout your code
    let { tempKey,
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

          <button
            id = "submitButton"
            type = "submit"
          >
          Submit!
          </button>

          <p> Your compatibility percentage! </p>

          <textarea
            id = "compatibility"
            placeholder = "???"
            value = { userName }
          />

          {/* Conditional rendering, based on the return value of calculatePercentage */}
          {/* Feel free to go in and change the values here to fall in line with your desired matching criteria */}
          { tempKey <= 10 && tempKey > 0 &&
            <div>
              <BadMatch />
            </div>
          }

          { tempKey > 10 &&
            <div>
              <GoodMatch />
            </div>
          }

          {/* Go ahead and customize this info! */}
          <footer> [Dev name here] | LEARN Academy Alpha 2020 </footer>
        </div>

      </React.Fragment>
    )
  }
}
