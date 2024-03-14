/* eslint-disable react/prop-types */
import DeleteButton from "./DeleteButton";
const Person = ({
  name,
  number,
  id,
  removePersonFromState,
  setErrorAndNotification,
}) => {
  return (
    <li>
      {name} {number}{" "}
      <DeleteButton
        name={name}
        setErrorAndNotification={setErrorAndNotification}
        removePersonFromState={removePersonFromState}
        id={id}
      />
    </li>
  );
};
export default Person;
