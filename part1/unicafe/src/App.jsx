import { useState } from "react";

const Button = ({ handleClick, text }) => {
  return <button onClick={handleClick}>{text}</button>;
};

const StatisticLine = ({ text, value }) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  );
};

const Statistics = ({
  good,
  neutral,
  bad,
  all,
  average,
  positivePercentage,
}) => {
  if (all <= 0) return <p>no feedback given</p>;

  return (
    <table>
      <tbody>
        <StatisticLine text={"good"} value={good} />
        <StatisticLine text={"neutral"} value={neutral} />
        <StatisticLine text={"bad"} value={bad} />
        <StatisticLine text={"all"} value={all} />
        <StatisticLine text={"average"} value={average} />
        <StatisticLine text={"positive"} value={positivePercentage} />
      </tbody>
    </table>
  );
};

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [all, setAll] = useState(0);
  const [average, setAverage] = useState(0);
  const [positivePercentage, setPositivePercentage] = useState(0);

  const countAverage = (
    updatedGood,
    updatedNeutral,
    updatedBad,
    updatedTotal
  ) => {
    let totalScore = updatedGood * 1 + updatedNeutral * 0 + updatedBad * -1;
    let average = totalScore / updatedTotal;

    setAverage(average);
  };

  const countPositivePercentage = (good, total) => {
    const newPercentage = (good / total) * 100;
    setPositivePercentage(newPercentage);
  };

  const increaseTotal = () => {
    setAll((previousAll) => previousAll + 1);
  };

  const handleClickGood = () => {
    increaseTotal();
    setGood((previousGood) => previousGood + 1);
    countAverage(good + 1, neutral, bad, all + 1);
    countPositivePercentage(good + 1, all + 1);
  };

  const handleClickNeutral = () => {
    increaseTotal();
    setNeutral((previousNeutral) => previousNeutral + 1);
    countAverage(good, neutral + 1, bad, all + 1);
    countPositivePercentage(good, all + 1);
  };

  const handleClickBad = () => {
    increaseTotal();
    setBad((previousBad) => previousBad + 1);
    countAverage(good, neutral, bad + 1, all + 1);
    countPositivePercentage(good, all + 1);
  };

  return (
    <div>
      <h1>Unicafe</h1>
      <Button handleClick={handleClickGood} text={"Good"} />
      <Button handleClick={handleClickNeutral} text={"Neutral"} />
      <Button handleClick={handleClickBad} text={"Bad"} />
      <h2>Statistics!</h2>
      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        all={all}
        average={average}
        positivePercentage={positivePercentage}
      />
    </div>
  );
};

export default App;
