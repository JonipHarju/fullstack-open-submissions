import Part from "./Part";
import Total from "./Total";
const Content = ({ parts }) => {
  console.log(parts, "parts from Content.jsx");
  return (
    <>
      {parts.map((part) => {
        return (
          <Part key={part.id} name={part.name} exercises={part.exercises} />
        );
      })}
      <Total parts={parts} />
    </>
  );
};

export default Content;
