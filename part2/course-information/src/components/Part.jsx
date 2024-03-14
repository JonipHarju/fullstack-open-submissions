const Part = ({ name, exercises }) => {
  console.log(name, exercises, "props from part.jsx");
  return (
    <div>
      {name}: {exercises}
    </div>
  );
};

export default Part;
