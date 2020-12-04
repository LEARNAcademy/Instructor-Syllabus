import React, { Component } from 'react';

export default class Square extends Component {
  render() {
    let { value, index, gameLogic } = this.props
    return(
      <>
        <div id="square" onClick={ () => gameLogic(index) }>
          { value }
        </div>
      </>
    )
  }
}
