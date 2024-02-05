import { useState } from "react";

// eslint-disable-next-line react/prop-types
const Button = ({ clickHandler, text }) => (
  <button onClick={clickHandler}>{text}</button>
);

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
  ];

  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0));

  const getRandomAnecdote = (arrayLength) => {
    return Math.floor(Math.random() * arrayLength);
  };

  const nextAnecdote = () => {
    let randomAnecdote;
    // get new anecdote until its not the currently selected one.
    do {
      randomAnecdote = getRandomAnecdote(anecdotes.length);
    } while (randomAnecdote === selected);

    setSelected(randomAnecdote);
  };

  const voteAnecdote = () => {
    const newVotes = [...votes];
    newVotes[selected] += 1;
    setVotes(newVotes);
  };

  const highestVoted = () => {
    const maxVotes = Math.max(...votes);
    const indexOfMaxVotes = votes.indexOf(maxVotes);

    if (maxVotes === 0) {
      return <p>No votes cast yet!</p>;
    }
    return anecdotes[indexOfMaxVotes];
  };

  return (
    <>
      <h1>Anecdote of the day</h1>
      <div>{anecdotes[selected]}</div>
      <div>Votes: {votes[selected]}</div>
      <Button text={"Next Anecdote"} clickHandler={nextAnecdote} />
      <Button text={"Vote"} clickHandler={voteAnecdote} />
      <h2>Anecdote with the most votes</h2>
      <div>{highestVoted()}</div>
    </>
  );
};

export default App;
