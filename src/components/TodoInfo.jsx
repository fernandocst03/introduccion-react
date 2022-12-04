import React from "react";
import "../styles/TodoInfo.css";

function TodoInfo(props) {
  return (
    <div className="TodoInfo">
      {props.children}
    </div>
  )
}

export { TodoInfo };