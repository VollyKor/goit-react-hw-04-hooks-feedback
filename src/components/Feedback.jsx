import { useReducer } from "react";

export default function Feedback() {
  const [state, dispatch] = useReducer(reducer, {
    good: 0,
    neutral: 0,
  bad: 0})


  renderFeedBackStatistics = () => {
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
    return feedbacks.map(e => (
      <button key={e} onClick={this.handleCLick.bind(this)}>
        {[e]}
      </button>
    ));
  };

  countValues() {
    const valuesArr = Object.values(this.state);
    let sum = 0;
    sum = valuesArr.reduce((acc, e) => (acc += e), 0);
    return sum;
  }

  countTotalFeedback = () => {
    return (
      <li className="item">
        <p>Total {this.countValues()}</p>
      </li>
    );
  };

  countPositiveFeedbackPercentage() {
    const goodFeedbackCount = this.state.good;

    let positiveCount = (100 / this.countValues()) * goodFeedbackCount;
    let roundedValue = Math.round(positiveCount);
    if (isNaN(roundedValue)) {
      roundedValue = 0;
    }
    return (
      <li className="item">
        <p>Positive Feedbacks: {roundedValue}% </p>
      </li>
    );
  }

  render() {
    console.log(this.countValues());
    return (
      <section className="container">
        <h2 hidden> Feedback</h2>
        <p>Please Leave Feedback</p>
        <div className="btn-container">{this.renderFeedbackButtons()}</div>
        <p>Statistics</p>
        <ul className="List">
          {this.renderFeedBackStatistics()}
          {this.countTotalFeedback()}
          {this.countPositiveFeedbackPercentage()}
        </ul>
      </section>
    );
  }
}
