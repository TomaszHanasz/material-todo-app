import Button from "@mui/material/Button";
import React from "react";
import "./customButton.style.css";

const CustomButton = (props) => {
  return (
    <div>
      <Button variant="outlined" style={props.style} onClick={props.onClick}>
        {props.text}
      </Button>
    </div>
  );
};

export default CustomButton;
