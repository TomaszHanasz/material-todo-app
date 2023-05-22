import SingleTodo from "../../components/singleTodo/SingleTodo";
import TodoInput from "../../components/todoInput/TodoInput";
import List from "@mui/material/List";
import React, { useState } from "react";
import "./todoApp.style.css";

const defaultTodoList = ["sleep", "work", "sleep"];

const TodoApp = () => {
  const [todoList, setTodoList] = useState(defaultTodoList);

  const addTodoHandler = (newTodo) => {
    setTodoList([...todoList, newTodo]);
  };

  const removeTodoHandler = (index) => {
    const updatedTodoList = [...todoList];
    updatedTodoList.splice(index, 1);
    setTodoList(updatedTodoList);
  };

  return (
    <div className="todo-container">
      <List sx={{ bgcolor: "background.paper" }} className="todo-box">
        <TodoInput addTodo={addTodoHandler} />
        {todoList.map((el, index) => {
          return (
            <SingleTodo
              name={el}
              key={index}
              onRemove={() => removeTodoHandler(index)}
            />
          );
        })}
      </List>
    </div>
  );
};

export default TodoApp;
