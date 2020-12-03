import s from './FeedbackOptions.module.css';

export default function FeedbackOptions({ options, onLeaveFeedback }) {
  const feedbackButtons = Object.keys(options);
  return feedbackButtons.map(item => (
    <button key={item} onClick={onLeaveFeedback} className={s.button}>
      {[item]}
    </button>
  ));
}
