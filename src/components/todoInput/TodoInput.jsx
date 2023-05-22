import AddIcon from "@mui/icons-material/Add";
import IconButton from "@mui/material/IconButton";
import TextField from "@mui/material/TextField";
import React, { useState } from "react";
import "./todoInput.style.css";

const TodoInput = (props) => {
  const [newTodo, setNewTodo] = useState("");

  const onChangeHandler = (e) => {
    setNewTodo(e.target.value);
  };

  const onKeyDownHandler = (e) => {
    if (e.key === "Enter") {
      props.addTodo(newTodo);
      setNewTodo("");
    }
  };

  const onClickHandler = () => {
    props.addTodo(newTodo);
    setNewTodo("");
  };

  return (
    <div className="todo-input">
      <TextField
        id="standard-basic"
        label="Enter Todo"
        variant="standard"
        type="text"
        onChange={onChangeHandler}
        onKeyDown={onKeyDownHandler}
        value={newTodo}
        fullWidth
      />

      <IconButton
        aria-label="add"
        style={{ borderRadius: 0, borderBottom: "1px solid #05454a" }}
        color={props.color}
      >
        <AddIcon onClick={onClickHandler} />
      </IconButton>
    </div>
  );
};

export default TodoInput;
