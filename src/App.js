import React, { Component } from 'react';
import "./App.css";
import Timeout from './components/Timeout';
import UEQueue from './components/UEQueue';

export default class App extends Component {
  
  constructor(props) {
    super(props)

    }

  

  render() {
    return (
      <div className='app'>
        {/* <UEQueue></UEQueue> */}
        <Timeout></Timeout>
      </div>
    )
  }
}

