import s from './Statistic.module.css';

export default function Statistic({ data, countValues }) {
  const feedbacks = Object.entries(data);
  const jsxArr = feedbacks.map(arr => {
    if (arr[0] === 'positivePercentage') {
      return (
        <li key={arr[0]} className={s.item}>
          <p>{`Positive feedback: ${arr[1]}%`}</p>
        </li>
      );
    }

    return (
      <li key={arr[0]} className={s.item}>
        <p>{`${arr[0]}: ${arr[1]}`}</p>
      </li>
    );
  });
  return jsxArr;
}
