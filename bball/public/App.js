import React, {Component} from 'react';
import Intro_ball from './components/Intro_ball'
import './App.css';


export default class App extends Component{


  render(){
    return (
      <div className="App">
        <header className="App-header">
          <Intro_ball/>
        </header>
      </div>
    );
  }
}

