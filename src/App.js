import React, { Component } from 'react';
import './App.css';
import SectionStatistic from './components/SectionStatistic/SectionStatistic';

export default class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  render() {
    return (
      <>
        <SectionStatistic data={this.state} />
      </>
    );
  }
}
