import SingleTodo from "../../components/singleTodo/SingleTodo";
import TodoInput from "../../components/todoInput/TodoInput";
import List from "@mui/material/List";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../../components/theme/Theme";
import React, { useState } from "react";
import "./todoApp.style.css";

const defaultTodoList = [];

const TodoApp = () => {
  const [todoList, setTodoList] = useState(defaultTodoList);
  const [message, setMessage] = useState("Please add your first todo :)");

  const addTodoHandler = (newTodo) => {
    if (newTodo.length > 0) {
      setTodoList([...todoList, newTodo]);
      setMessage("New Todo added");
    } else if (newTodo.length === 0) {
      setMessage("Field cannot be empty");
    }
  };

  const removeTodoHandler = (index) => {
    const updatedTodoList = [...todoList];
    updatedTodoList.splice(index, 1);
    setTodoList(updatedTodoList);
    if (Object.keys(todoList).length === 1) {
      setMessage("All done! Good job :)");
    } else {
      setMessage("Todo removed");
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <div className="todo-container">
        <h1 className="title">Todo List</h1>
        <List sx={{ bgcolor: "background.paper" }} className="todo-box">
          <TodoInput addTodo={addTodoHandler} color="primary" />
          <h2>{message}</h2>
          {todoList.map((el, index) => {
            return (
              <SingleTodo
                name={el}
                key={index}
                onRemove={() => removeTodoHandler(index)}
                colorRemove="secondary"
              />
            );
          })}
        </List>
      </div>
    </ThemeProvider>
  );
};

export default TodoApp;
