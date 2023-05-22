import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import IconButton from "@mui/material/IconButton";
import React from "react";
import "./singleTodo.style.css";

const SingleTodo = (props) => {
  return (
    <div>
      <ListItem
        className="list-item"
        disableGutters
        secondaryAction={
          <IconButton aria-label="delete">
            <DeleteForeverIcon onClick={props.onRemove} />
          </IconButton>
        }
      >
        <ListItemText primary={props.name} />
      </ListItem>
    </div>
  );
};

export default SingleTodo;
