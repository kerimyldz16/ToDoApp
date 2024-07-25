import React from "react";
import { useState } from "react";

export const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value === "") {
      alert("Please input your task!");
    } else {
      addTodo(value);
    }
    setValue("");
  };

  return (
    <form className="TodoForm" onSubmit={handleSubmit}>
      <h1>Your Todo List</h1>
      <input
        value={value}
        type="text"
        className="todo-input"
        placeholder="Write your tasks!"
        onChange={handleChange}
      />
      <button type="submit" className="todo-btn">
        Add Task
      </button>
    </form>
  );
};
