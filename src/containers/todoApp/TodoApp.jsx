import SingleTodo from "../../components/singleTodo/SingleTodo";
import TodoInput from "../../components/todoInput/TodoInput";
import List from "@mui/material/List";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../../components/theme/Theme";
import React, { useState, useEffect } from "react";
import "./todoApp.style.css";

const TodoApp = () => {
  const storedTodoList = localStorage.getItem("Todo List");
  const defaultTodoList = storedTodoList ? storedTodoList.split(",") : [];
  const [todoList, setTodoList] = useState([...defaultTodoList]);
  const [message, setMessage] = useState("Please add a todo :)");

  useEffect(() => {
    if (storedTodoList) {
      setTodoList([...defaultTodoList]);
    } // eslint-disable-next-line
  }, [storedTodoList]);

  const addTodoHandler = (newTodo) => {
    if (newTodo.length > 0) {
      const updatedTodoList = [...todoList, newTodo];
      localStorage.setItem("Todo List", updatedTodoList.join(","));
      setTodoList(updatedTodoList);
      setMessage("New todo added");
    } else {
      setMessage("Field cannot be empty");
    }
  };

  const removeTodoHandler = (index) => {
    const updatedTodoList = [...todoList];
    updatedTodoList.splice(index, 1);
    localStorage.setItem("Todo List", updatedTodoList.join(","));
    setTodoList(updatedTodoList);
    if (updatedTodoList.length === 0) {
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
      <p style={{ textAlign: "center", color: "white" }}>
        Copyrights Tomasz Hanasz {new Date().getFullYear()}
      </p>
    </ThemeProvider>
  );
};

export default TodoApp;
