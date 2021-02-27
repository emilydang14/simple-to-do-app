import React from "react";
import "../styles/TodoItem.css";

const TodoItem = (props) => {
  return (
    <div className="TodoItem centered">
      <div className="serial-number centered">{props.serialNumber}</div>
      <div className="todo-info">
        <input
          value={props.info}
          placeholder={props.info}
          onChange={(e) => props.onChange(e)}
        />
      </div>
      <div className="todo-item-editing-buttons centered">
        <button type="delete-button" onClick={props.delete}>
          <i className="fas fa-minus-square"></i>
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
