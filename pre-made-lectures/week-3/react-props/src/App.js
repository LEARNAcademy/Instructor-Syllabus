import React, { Component } from 'react'
import GroceryItem from './components/GroceryItem'

class App extends Component{
  constructor(props) {
    super(props)
    this.state = {
      item1: "Eggo waffles",
      item2: "Wine",
      list: [
        "Cheese",
        "Lemons",
        "Oatmeal"
      ]
    }
  }

  sayHello = () => {
    console.log("hello!");
  }

  render(){
    return(
      <div>
        To buy:
        <GroceryItem name="Eggo waffles" />
        <GroceryItem name={ this.state.item1 } />
        <GroceryItem
          name={ this.state.item2 }
          sayHello={ this.sayHello }
        />
        { this.state.list.map(item => <GroceryItem name={item} />)}
      </div>
    )
  }
}
export default App
