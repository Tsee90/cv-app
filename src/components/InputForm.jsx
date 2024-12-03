import { useState } from 'react';
import { Input } from './Input';
import { TextArea } from './TextArea';
import '../styles/inputForm.css';

export function InputForm({ fields, editing, deleteButton }) {
  const [state, setState] = useState(fields);
  const [isEditing, setIsEditing] = useState(editing);
  const [buttonText, setButtonText] = useState(editing ? 'save' : 'edit');
  const valueIndex = 1;
  const nameIndex = 2;

  function changeValue(index, value) {
    const newState = [...state];
    newState[index][valueIndex] = value;
    setState(newState);
  }

  const isEditingHandler = () => {
    setIsEditing((prev) => {
      const newIsEditing = !prev;
      setButtonText(newIsEditing ? 'save' : 'edit');
      return newIsEditing;
    });
  };

  function checkValues() {
    let result = false;
    state.forEach((set) => {
      if (set[valueIndex] !== '') {
        result = true;
      }
    });
    return result;
  }

  const button = (
    <button onClick={isEditingHandler} className="edit-button">
      {buttonText}
    </button>
  );

  function checkInputType(set, index) {
    if (set[0] === 'input')
      return (
        <Input
          key={index}
          value={set[valueIndex]}
          name={set[nameIndex]}
          type={set[3]}
          onChange={(e) => changeValue(index, e.target.value)}
        ></Input>
      );
    if (set[0] === 'textarea')
      return (
        <TextArea
          key={index}
          value={set[valueIndex]}
          name={set[nameIndex]}
          rows={set[3]}
          cols={set[4]}
          onChange={(e) => changeValue(index, e.target.value)}
        ></TextArea>
      );
  }

  const inputs = (
    <div className="inputs-container">
      {state.map((set, index) => checkInputType(set, index))}
    </div>
  );

  const display = (
    <div className="input-values">
      {state.map((set, index) => (
        <div key={index}>{set[valueIndex]}</div>
      ))}
    </div>
  );

  return (
    <div className="input-form">
      {isEditing ? (
        <div className="editing-container">
          {inputs}
          <div className="edit-delete-container">
            {button}
            {deleteButton}
          </div>
        </div>
      ) : checkValues() ? (
        <div className="editing-container">
          {display}
          <div className="edit-delete-container">
            {button}
            {deleteButton}
          </div>
        </div>
      ) : (
        <div className="editing-container">
          <div className="add-info">Click edit to add info...</div>
          <div className="edit-delete-container">
            {button}
            {deleteButton}
          </div>
        </div>
      )}
    </div>
  );
}
