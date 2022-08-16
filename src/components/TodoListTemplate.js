import React, { useState, useEffect } from "react";
import Form from "./Form";
import TodoItemList from "./TodoItemList";
import "./TodoListTemplate.css";

const TodoListTemplate = () => {
  const [text, setText] = useState("");
  const [id, setId] = useState(() => {
    if (typeof window !== "undefined") {
      const savedId = window.localStorage.getItem("id");
      if (savedId !== null) {
        return parseInt(savedId);
      } else {
        return 0;
      }
    }
  });
  const [isChecked, setIsChecked] = useState(false);
  const [todos, setTodos] = useState(() => {
    if (typeof window !== "undefined") {
      const savedTodos = window.localStorage.getItem("todos");
      if (savedTodos !== null) {
        return JSON.parse(savedTodos);
      } else {
        return [];
      }
    }
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
    localStorage.setItem("id", id);
  }, [todos, id]);

  const onCreate = () => {
    if (!text) {
      return;
    }
    setId((prev) => prev + 1);

    const newTodo = {
      id,
      text,
      isChecked: false,
    };

    setTodos([newTodo, ...todos]);
    setText("");
  };

  const onToggle = (id) => {
    setIsChecked(!isChecked);
    const index = todos.findIndex((todo) => todo.id === id);
    const selected = todos[index];
    const nextTodos = [...todos];
    nextTodos[index] = {
      ...selected,
      isChecked,
    };

    setTodos(nextTodos);
  };

  const onRemove = (id) => {
    const notRemoved = todos.filter((todo) => todo.id !== id);
    setTodos(notRemoved);
  };

  return (
    <main className="todo-list-template">
      <div className="title">To Do List</div>
      <section className="form-wrapper">
        <Form text={text} setText={setText} onCreate={onCreate} />
      </section>
      <section className="todos-wrapper">
        <TodoItemList todos={todos} onToggle={onToggle} onRemove={onRemove} />
      </section>
    </main>
  );
};

export default TodoListTemplate;
