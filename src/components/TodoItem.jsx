import React from "react";
import "../styles/TodoItem.css";

function TodoItem(props){

  return(
    <li className="TodoItem">
      <input
          type="checkbox"
          className={props.complete ? "check" : "uncheck"}
          onClick={props.onComplete}
        />
      <p>{props.text}</p>
      <span className={props.complete ? "complete" : "pending"}
      >
        {props.complete ? "Completado" : "Pendiente"}
      </span>
      <span 
        className="delete"
        onClick={props.onDelete}
      >
        X
      </span>
    </li>
  );

}

export { TodoItem }
