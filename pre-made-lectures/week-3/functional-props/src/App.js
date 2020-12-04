import React, { Component } from 'react'
import Mood from './components/Mood'

class App extends Component{
  constructor(props) {
    super(props)
    this.state={
      moods: ["🤠", "🥱", "🤩", "🥶"],
      currentMood: "😐"
    }
  }

  changeMood = (input) => {
    if(input === "no") {
      this.setState({ currentMood: this.state.moods[Math.floor(Math.random() * 4)]})
    }
  }

  render(){
    return(
      <>
        Is this your mood?
        <Mood
          current={ this.state.currentMood }
          change={this.changeMood}
        />
      </>
    )
  }
}

export default App
