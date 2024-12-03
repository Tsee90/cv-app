import { InputForm } from './InputForm';
import { useState } from 'react';
import '../styles/inputFormContainer.css';

export function InputFormContainer({ title, fields, isDupable }) {
  const [forms, setForms] = useState({});
  const newFields = JSON.parse(JSON.stringify(fields));

  const checkForms = () => {
    return Object.keys(forms).length === 0;
  };

  const addHandler = () => {
    const id = crypto.randomUUID();
    const deleteButton = (
      <button id={id} onClick={(e) => deleteHandler(e)}>
        Delete
      </button>
    );
    setForms((prevForms) => ({
      ...prevForms,
      [id]: (
        <InputForm
          key={id}
          fields={newFields}
          editing={true}
          deleteButton={deleteButton}
        />
      ),
    }));
  };

  const deleteHandler = (e) => {
    setForms((prevForms) => {
      const { [e.target.id]: _, ...rest } = prevForms;
      return rest;
    });
  };

  const addButton = (
    <button onClick={addHandler} className="add-button">
      +
    </button>
  );

  return (
    <div className="input-form-container">
      {!isDupable ? (
        <div className="input-form-not-dupable">
          <div className="input-form-title">{title}</div>
          <InputForm fields={fields}></InputForm>
        </div>
      ) : (
        <div className="input-form-not-dupable">
          <div className="input-form-title">
            {title}
            {addButton}
          </div>
          {checkForms() ? (
            <div className="add-info">Press + to add education...</div>
          ) : (
            <div>{Object.values(forms).map((value) => value)}</div>
          )}
        </div>
      )}
    </div>
  );
}
