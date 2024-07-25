import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

export const Todo = ({ todoTask, deleteTodo, editTodo }) => {
  return (
    <div className="Todo">
      <p>{todoTask.task}</p>
      <div>
        <FontAwesomeIcon
          cursor="pointer"
          icon={faPenToSquare}
          onClick={() => editTodo(todoTask.id)}
        />
        <FontAwesomeIcon
          cursor="pointer"
          icon={faTrash}
          onClick={() => {
            deleteTodo(todoTask.id);
          }}
        />
      </div>
    </div>
  );
};
