import s from './SectionStatistic.module.css';
import FeedbackOptions from '../FeedBackOptions/FeedbackOptions';
import Statistic from '../Statistics/Statistic';
import Notification from '../Notification/Notification';

export default function SectionStatistic({ data, onLeaveFeedback }) {
  const { good, neutral, bad } = data;

  const countValues = () => {
    const valuesArr = Object.values(data);
    let sum = 0;
    sum = valuesArr.reduce((acc, e) => (acc += e), 0);
    return sum;
  };

  const countPositiveFeedbackPercentage = () => {
    const goodFeedbackCount = data.good;

    const positiveCount = (100 / countValues()) * goodFeedbackCount;
    let roundedValue = Math.round(positiveCount);
    if (isNaN(roundedValue)) {
      roundedValue = 0;
    }
    return roundedValue;
  };

  return (
    <section>
      <h2>Please Leave Feedback </h2>
      <div className={s.btnList}>
        <FeedbackOptions
          options={data}
          onLeaveFeedback={onLeaveFeedback}
        />
      </div>
      {countValues() !== 0 ? (
        <>
          <h3>Statistics</h3>
          <ul className="list">
            <Statistic
              good={good}
              neutral={neutral}
              bad={bad}
              total={countValues()}
              positivePercentage={countPositiveFeedbackPercentage()}
            />
          </ul>
        </>
      ) : (
        <Notification />
      )}
    </section>
  );
}
