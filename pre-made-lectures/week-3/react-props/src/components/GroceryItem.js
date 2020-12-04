import React, { Component } from 'react'

class GroceryItem extends Component{
  render(){
    return(
      <>
        <h3>{ this.props.name }</h3>
        <button onClick={ this.props.sayHello }>
        click!
        </button>
      </>
    )
  }
}
export default GroceryItem
