/* eslint-disable react/prop-types */
import personService from "../services/persons.js";

const DeleteButton = ({
  id,
  removePersonFromState,
  setErrorAndNotification,
  name,
}) => {
  const handleDelete = () => {
    const userConfirm = window.confirm(
      "Do you really want to delete this person?"
    );

    if (userConfirm) {
      personService
        .remove(id)
        .then(() => {
          setErrorAndNotification(`information of ${name} removed`, "success");
          removePersonFromState(id);
        })
        .catch((error) => {
          setErrorAndNotification(
            `information of ${name} has all ready been removed`,
            "error"
          );
          console.error("Error deleting person:", error);
        });
    }
  };

  return <button onClick={handleDelete}>Delete</button>;
};

export default DeleteButton;
