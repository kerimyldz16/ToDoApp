import React, { useState } from "react";

export const EditTodoForm = ({ editTodo, todoTask }) => {
  const [value, setValue] = useState(todoTask.task);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value === "") {
      alert("Please input your task!");
    } else {
      editTodo(value, todoTask.id);
    }
    setValue("");
  };

  return (
    <form className="TodoForm" onSubmit={handleSubmit}>
      <h1>Edit Your Todo</h1>
      <input
        value={value}
        type="text"
        className="todo-input"
        placeholder="Change your task!"
        onChange={handleChange}
      />
      <button type="submit" className="todo-btn">
        Update
      </button>
    </form>
  );
};
