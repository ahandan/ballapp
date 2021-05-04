import React, { Component } from "react";
import ReactDOM from "react-dom";
// import {bball} from '../logo'
import Map from './LeafletMap.js'
import '../'
export default class BallApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };

  }
  

  render() {
    return (
      <div className="App">
        <header className="App-header">
           <Map></Map>
        </header>
      </div>
    );
  }
}
