/* eslint-disable react/prop-types */
import Person from "./Person";

const Persons = ({
  persons,
  removePersonFromState,
  setErrorAndNotification,
}) => {
  return (
    <div>
      {persons.map((person) => (
        <Person
          setErrorAndNotification={setErrorAndNotification}
          key={person.name}
          name={person.name}
          number={person.number}
          id={person.id}
          removePersonFromState={removePersonFromState}
        />
      ))}
    </div>
  );
};
1;
export default Persons;
