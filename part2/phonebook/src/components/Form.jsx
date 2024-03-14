/* eslint-disable react/prop-types */
const Form = ({
  formOnChangeName,
  add,
  newName,
  newNumber,
  formOnChangeNumber,
}) => {
  return (
    <form>
      <div>
        name: <input value={newName} onChange={formOnChangeName} />
      </div>
      <div>
        number: <input value={newNumber} onChange={formOnChangeNumber} />
      </div>

      <div>
        <button onClick={add} type="submit">
          add
        </button>
      </div>
    </form>
  );
};

export default Form;
