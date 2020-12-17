import { useReducer } from 'react';

const countReducer = (prevState, { type, payload }) => {
  return { ...prevState, [type]: prevState[type] + payload };
};

export default function Feedback() {
  const [state, dispatch] = useReducer(countReducer, {
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const renderFeedBackStatistics = () => {
    const feedbacks = Object.entries(state);
    const jsxArr = feedbacks.map(arr => {
      return (
        <li key={arr[0]} className="item">
          <p>{`${arr[0]}: ${arr[1]}`}</p>
        </li>
      );
    });
    return jsxArr;
  };

  function handleCLick(event) {
    const name = event.currentTarget.textContent;
    dispatch({ type: name, payload: 1 });
  }

  const renderFeedbackButtons = () => {
    const feedbacks = Object.keys(state);
    return feedbacks.map(e => (
      <button key={e} onClick={handleCLick}>
        {[e]}
      </button>
    ));
  };

  function countValues() {
    const valuesArr = Object.values(state);
    let sum = 0;
    sum = valuesArr.reduce((acc, e) => (acc += e), 0);
    return sum;
  }

  const countTotalFeedback = () => {
    return (
      <li className="item">
        <p>Total {countValues()}</p>
      </li>
    );
  };

  function countPositiveFeedbackPercentage() {
    const goodFeedbackCount = state.good;

    let positiveCount = (100 / countValues()) * goodFeedbackCount;
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

  console.log(countValues());
  return (
    <section className="container">
      <h2 hidden> Feedback</h2>
      <p>Please Leave Feedback</p>
      <div className="btn-container">{renderFeedbackButtons()}</div>
      <p>Statistics</p>
      <ul className="List">
        {renderFeedBackStatistics()}
        {countTotalFeedback()}
        {countPositiveFeedbackPercentage()}
      </ul>
    </section>
  );
}
