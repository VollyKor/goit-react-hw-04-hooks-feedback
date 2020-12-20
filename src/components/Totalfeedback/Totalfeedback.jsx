export default function CountTotalFeedback({ countValues }) {
  return (
    <li className="item">
      <p>Total {countValues()}</p>
    </li>
  );
}
