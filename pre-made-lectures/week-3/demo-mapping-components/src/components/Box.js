import React, { Component } from 'react';

export default class Box extends Component {
  render() {
    return(
      <>
        <div id="square">
          { this.props.index }
        </div>
      </>
    )
  }
}
