import './App.css';
import React, { Component } from 'react'
import Steps from './components/steps/Steps';
import Sum from './components/react-storage-handler/arith'
import Devices from './components/Devices/Devices';

export class App extends Component {
  render() {
    return (
      <div>
        <h1 className='text-2xl font-bold text-center mt-4'>
          Practice Purpose
        </h1>
        <Steps />
        <Sum />
        <Devices />
      </div>
    )
  }
}

export default App;