import { useReducer } from 'react';
import FeedbackOptions from '../FeedBackOptions/FeedbackOptions';
import Statistic from '../Statistics/Statistic';
import Notification from '../Notification/Notification';
import CountTotalFeedback from '../Totalfeedback/Totalfeedback';
import PositiveFeedbackPercentage from '../PositiveFeedbackPercentage/PositiveFeedbackPercentage';

const countReducer = (prevState, { type, payload }) => {
  return { ...prevState, [type]: prevState[type] + payload };
};

export default function Feedback() {
  const [state, dispatch] = useReducer(countReducer, {
    good: 0,
    neutral: 0,
    bad: 0,
  });

  function handleCLick(event) {
    const name = event.currentTarget.textContent;
    dispatch({ type: name, payload: 1 });
  }

  function countValues() {
    const valuesArr = Object.values(state);
    let sum = 0;
    sum = valuesArr.reduce((acc, e) => (acc += e), 0);
    return sum;
  }

  return (
    <section className="container">
      <h2 hidden> Feedback</h2>
      <p>Please Leave Feedback</p>

      <div className="btn-container">
        <FeedbackOptions options={state} onLeaveFeedback={handleCLick} />
      </div>
      <ul className="List"></ul>
      {countValues() !== 0 ? (
        <>
          <h3>Statistics</h3>
          <ul className="list">
            <Statistic data={state} countValues={countValues} />
            <CountTotalFeedback countValues={countValues} />
            <PositiveFeedbackPercentage
              state={state}
              countValues={countValues}
            />
          </ul>
        </>
      ) : (
        <Notification />
      )}
    </section>
  );
}
