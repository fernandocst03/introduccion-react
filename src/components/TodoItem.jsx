import React from "react";
import "../styles/TodoItem.css";

function TodoItem(props){
  return(
    <li className="TodoItem">
      <input
          type="checkbox"
        />
      <p>{props.text}</p>
      <span className="status">Status</span>
    </li>
  );
}

export { TodoItem }