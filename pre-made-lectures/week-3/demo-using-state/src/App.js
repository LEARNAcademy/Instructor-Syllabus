import React, { Component } from 'react';
import './App.css'

export default class App extends Component {
  constructor(props) {
    super(props)
      this.state = {
        emotionsArray: ["😈", "😂", "🤪", "😖", "🥳", "🥶", "🤬", "🤯", "😑", "🥺", "🥱", "🥰", "🥴", "🤢"],
        currentEmotion: "❓",
        selectedEmotions: []
    }
  }

  handleChange = () => {
    let { emotionsArray, currentEmotion } = this.state
    let randomEmotion = emotionsArray[Math.floor(Math.random() * emotionsArray.length)]
    this.setState({ currentEmotion: randomEmotion })
  }

  addSelection = () => {
    let { currentEmotion, selectedEmotions } = this.state
    if(currentEmotion !== "❓") {
      selectedEmotions.push(currentEmotion)
      this.setState({ selectedEmotions: selectedEmotions })
    }
  }

  render() {
    let { currentEmotion, selectedEmotions } = this.state
    return(
      <>
        <div className = "body">
          <h1>Mood Meter</h1>
          <button onClick={ this.handleChange }>
          How do you feel?
          </button>
          <div id="emotion">
            { currentEmotion }
          </div>
          <div id="chooseButton">
            <button onClick={ this.addSelection }>
              Select
            </button>
          </div>
          <div id="selection">
            { selectedEmotions }
          </div>
        </div>
      </>
    )
  }
}
