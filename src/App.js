import React, { Component } from 'react';
import "./App.css";
import GradientTest from './components/GradientTest';
import TestDispatch from './components/TestDispatch';
import Timeout from './components/Timeout';
import UEQueue from './components/UEQueue';
import UETest from './components/UETest';

export default class App extends Component {
  
  constructor(props) {
    super(props)

    }

  

  render() {
    return (
      <div className='app'>
        <GradientTest></GradientTest>
      </div>
    )
  }
}

