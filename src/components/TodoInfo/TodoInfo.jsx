import React from "react";
import "./TodoInfo.css";

function TodoInfo({ children, loading }) {
  return (
    <div className="TodoInfo">
      {children}
    </div>
  )
}

export { TodoInfo };

// cloneElement no puede trabajat con dos elementos hijos
// Chldren.toArray(props.children) convierte los elementos hijos en un array
