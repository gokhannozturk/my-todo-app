import React from "react";

const AddTodo = ({
  inputName,
  inputID,
  input,
  input2,
  handleChange,
  addTodo,
  editMode,
  onClick,
}) => {
  return (
    <div className="input-group mb-3 todo-add-container">
      <input
        id={inputID}
        value={input}
        name={inputName}
        type="text"
        className="form-control"
        placeholder="enter to do"
        onChange={(e) => {
          handleChange(e);
        }}
        onKeyPress={(e) => {
          if (e.key === "Enter") {
            addTodo();
          }
        }}
      />

      <div className="input-group-append">
        <button
          onClick={onClick}
          className="btn btn-primary"
          type="button"
          id="button-add"
        >
          {typeof editMode !== "undefined" ? "Edit todo" : "Add Todo"}
        </button>
      </div>
    </div>
  );
};

export default AddTodo;
