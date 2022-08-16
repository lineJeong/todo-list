import React from "react";
import TodoItem from "./TodoItem";

const TodoItemList = ({ todos, onToggle, onRemove }) => {
  const todoList = todos.map(({ id, text, isChecked }) => (
    <TodoItem
      key={id}
      id={id}
      text={text}
      isChecked={isChecked}
      onToggle={onToggle}
      onRemove={onRemove}
    />
  ));

  return <div>{todoList}</div>;
};

export default TodoItemList;
