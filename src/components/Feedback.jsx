import React, { Component } from 'react';

const initialState = {
  good: 0,
  neutral: 0,
  bad: 0,
};

export default class Feedback extends Component {
  state = {
    ...initialState,
  };

  renderStateValuesMarkup = () => {
    const feedbacks = Object.entries(this.state);
    const jsxArr = feedbacks.map(arr => {
      return (
        <li key={arr[0]} className="item">
          <p>{`${arr[0]}: ${arr[1]}`}</p>
        </li>
      );
    });
    return jsxArr;
  };

  handleCLick(event) {
    console.dir(event.currentTarget.textContent);
    const name = event.currentTarget.textContent;
    this.setState(prevState => {
      return {
        [name]: prevState[name] + 1,
      };
    });
  }

  renderFeedbackButtons = () => {
    const feedbacks = Object.keys(this.state);
    console.log(feedbacks);
    return feedbacks.map(e => (
      <button key={e} onClick={this.handleCLick.bind(this)}>
        {[e]}
      </button>
    ));
  };

  render() {
    return (
      <section className="container">
        <h2 hidden> Feedback</h2>
        <p>Please Leave Feedback</p>
        <div className="btn-container">{this.renderFeedbackButtons()}</div>
        <p>Statistics</p>
        <ul className="List">{this.renderStateValuesMarkup()}</ul>
      </section>
    );
  }
}
