import React, { Component } from 'react';
import './App.module.css';
import SectionStatistic from './components/SectionStatistic/SectionStatistic';

export default class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleCLick = e => {
    // const { data } = this.props;
    const name = e.currentTarget.textContent;
    this.setState(prevState => {
      return {
        [name]: prevState[name] + 1,
      };
    });
  };

  render() {
    return (
      <>
        <SectionStatistic
          data={this.state}
          onLeaveFeedback={this.handleCLick}
        />
      </>
    );
  }
}
