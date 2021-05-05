import React, { Component } from "react";
import ReactDOM from "react-dom";
import bball from '../logo/bball.svg'
import BballApp from './BallApp'


export default class Intro_ball extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    this.start = this.start.bind(this)
  }
  
  start(){
    ReactDOM.render(<BballApp></BballApp>,document.getElementById("root"))
  }

  render() {
    return (
      <div onClick={() => this.start()}>
             { <img src={bball} className="App-logo" alt="logo" /> }
      </div>
    );
  }
}