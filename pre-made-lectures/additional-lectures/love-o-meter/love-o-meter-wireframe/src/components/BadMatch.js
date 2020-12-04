import React, { Component } from 'react';
import '../App.css';

export default class BadMatch extends Component{
  render(){
    return (
      <>

        {/* Here is where you can customize the result of a bad match */}
        <p className = "results">Ouch! Not a great match. Consider saving your money this year!</p>

      </>
    );
  }
}
