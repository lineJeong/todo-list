import React from "react";
import "./TodoItem.css";

const TodoItem = ({ id, text, isChecked, onToggle, onRemove }) => {
  return (
    <div key={id} className="todo-item" onClick={() => onToggle(id)}>
      <div className="check-mark">{isChecked ? "■" : "□"}</div>

      <div className={`todo-text ${isChecked && "checked"}`}>
        <div>{text}</div>
      </div>
      <div
        className="remove"
        onClick={(e) => {
          e.stopPropagation();
          onRemove(id);
        }}
      >
        &times;
      </div>
    </div>
  );
};

export default TodoItem;
