import React, { Component } from 'react';
import './PatientSearch.css';

class PatientSearch extends Component {

  render() {
    return (
      <div className="PatientSearch">
        <div className="Headline">Your Patients</div>
        <div className="Note">
          <span className="Exclamation">!  </span>
          <span>Patients Requiring Attention</span>
        </div>
      </div>
    );
  }
}

export default PatientSearch;
