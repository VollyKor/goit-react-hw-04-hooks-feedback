export default function PositiveFeedbackPercentage({
  state,
  countValues,
}) {
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
