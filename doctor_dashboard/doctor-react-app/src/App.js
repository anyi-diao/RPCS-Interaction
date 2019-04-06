import React, { Component } from 'react';
import Moment from 'react-moment';
import 'moment-timezone';
import logo from './logo_nemosi.svg';
import './App.css';
import Schedule from './Schedule.js';
import PatientSearch from './PatientSearch.js'

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <span>Nemosi</span>
        </header>
        <div className="Welcome-text">
          <p>Hello Dr. Smith</p>
        </div>
        <div className="Date-time">
          <div><Moment format="dddd, MMMM D"/></div>
          <div><Moment format="LT" /></div>
        </div>
        <Schedule />
        <PatientSearch />
      </div>
    );
  }
}

export default App;
