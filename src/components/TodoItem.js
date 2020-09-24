import React from "react";
import "../styles/TodoItem.css";

const TodoItem = (props) => {
  return (
    <div className="TodoItem centered">
      <div className="serial-number centered">{props.serialNumber}</div>
      <div className="todo-info"> {props.info} </div>
      <div className="todo-item-editing-buttons centered">
        {/* <button
          className="completed-button"
          onClick={props.complete}
          type="button"
        >
          <i className="fas fa-check-square"></i>
        </button>
        <button type="edit-button">
          <i className="fas fa-edit"></i>
        </button> */}
        <button type="delete-button" onClick={props.delete}>
          <i className="fas fa-minus-square"></i>
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
