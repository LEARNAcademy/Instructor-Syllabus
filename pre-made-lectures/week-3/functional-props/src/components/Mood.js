import React, { Component } from 'react'

class App extends Component{
  newMood = () => {
    this.props.change("no")
  }

  render(){
    return(
      <div>
        { this.props.current }
        <br/>
        <button onClick={this.newMood}>No</button>
      </div>
    )
  }
}

export default App
