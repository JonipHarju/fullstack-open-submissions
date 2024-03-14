import { useState, useEffect } from "react";
import Form from "./components/Form";
import Persons from "./components/Persons";
import Search from "./components/Search";
import personService from "./services/persons";
import "./index.css";
import Notifications from "./components/Notifications";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [searchParameter, setSearchParameter] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [notificationType, setNotificationType] = useState("");

  useEffect(() => {
    personService.getAll().then((response) => {
      console.log(response.data);
      setPersons(response.data);
    });
  }, []);

  const removePersonFromState = (id) => {
    const updatedPersons = persons.filter((person) => person.id !== id);
    setPersons(updatedPersons);
  };

  const setErrorAndNotification = (error, notification) => {
    setErrorMessage(error);
    setNotificationType(notification);

    setTimeout(() => {
      setErrorMessage("");
      setNotificationType("");
    }, 3000);
  };

  const formOnChangeName = (e) => {
    setNewName(e.target.value);
  };

  const formOnChangeNumber = (e) => {
    setNewNumber(e.target.value);
  };

  const updatePerson = () => {
    const newNameLowerCase = newName.toLowerCase();

    const personToUpdate = persons.find(
      (person) => person.name.toLowerCase() === newNameLowerCase
    );
    personService
      .update(personToUpdate.id, { ...personToUpdate, number: newNumber })
      .then((response) => {
        const updatedPersons = persons.map((person) =>
          person.id === personToUpdate.id ? response.data : person
        );

        setPersons(updatedPersons);

        setErrorAndNotification(
          `Updated ${personToUpdate.name}'s number to ${newNumber} `,
          "success"
        );
      });
  };

  const addPerson = (e) => {
    e.preventDefault();
    setNewName("");

    //make the name lowercase
    const newNameLowerCase = newName.toLowerCase();

    // check if the name is allready in the phonebook. If it is, ask the user to update
    if (
      persons.some((element) => element.name.toLowerCase() === newNameLowerCase)
    ) {
      const userConfirm = window.confirm(
        `${newName} is already added to phonebook. Do you want to update the phone number?`
      );

      if (!userConfirm) {
        console.log("dont update");
        return;
      } else {
        console.log("update");
        updatePerson();
        return;
      }
    }
    // if user denied to add person, create new person. and set the notification to be success or error depending on the outcome
    personService
      .create({ name: newName, number: newNumber })
      .then((response) => {
        setErrorAndNotification(`Added ${newName}`, "success");
        setTimeout(() => {
          setErrorMessage("");
          setNotificationType("");
        }, 3000);
        setPersons([...persons, response.data]);
      })
      .catch((error) => {
        setErrorMessage(`error adding ${newName} + ${error}`);
        setNotificationType("error");
        setTimeout(() => {
          setErrorMessage("");
          setNotificationType("");
        }, 3000);
      });
  };

  const filteredPersons = persons.filter((person) =>
    person.name.toLowerCase().includes(searchParameter.toLowerCase())
  );

  return (
    <div>
      <h2>Phonebook</h2>
      <Notifications
        message={errorMessage}
        notificationType={notificationType}
      />
      <Search
        searchParameter={searchParameter}
        onSearchChange={setSearchParameter}
      />
      <Form
        newName={newName}
        formOnChangeName={formOnChangeName}
        add={addPerson}
        formOnChangeNumber={formOnChangeNumber}
      />
      <h2>Numbers</h2>
      <Persons
        removePersonFromState={removePersonFromState}
        persons={filteredPersons}
        setErrorAndNotification={setErrorAndNotification}
      />
    </div>
  );
};

export default App;
