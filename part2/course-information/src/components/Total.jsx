const Total = (parts) => {
  console.log("Total", parts.parts);
  let total = parts.parts.reduce((acc, part) => {
    console.log(acc, part);
    return acc + part.exercises;
  }, 0);
  console.log(total);
  return <h3>Total of exercises: {total}</h3>;
};

export default Total;
