import SingleTodo from "../../components/singleTodo/SingleTodo";
import TodoInput from "../../components/todoInput/TodoInput";
import List from "@mui/material/List";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../../components/theme/Theme";
import React, { useState } from "react";
import "./todoApp.style.css";

const TodoApp = () => {
  const placeholderTodoList = ["eat", "work", "sleep"];
  const defaultTodoList = localStorage.getItem("Todo List").split(",");
  const [todoList, setTodoList] = useState([...defaultTodoList]);
  const [message, setMessage] = useState("Please add todo :)");

  const addTodoHandler = (newTodo) => {
    if (newTodo.length > 0) {
      localStorage.setItem("Todo List", [...todoList, newTodo]);
      setTodoList([...todoList, newTodo]);
      setMessage("New Todo added");
    } else if (newTodo.length === 0) {
      setMessage("Field cannot be empty");
    }
  };

  const removeTodoHandler = (index) => {
    const updatedTodoList = [...todoList];
    updatedTodoList.splice(index, 1);
    localStorage.setItem("Todo List", [...updatedTodoList]);
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
          {defaultTodoList.length < 1
            ? setTodoList(placeholderTodoList)
            : todoList.map((el, index) => {
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
