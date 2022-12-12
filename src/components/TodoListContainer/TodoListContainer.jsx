import React from "react"
import "./TodoListContainer.css"

function TodoListContainer(props){
  return(
    <div className="TodoLisContainer">
      {props.children}
    </div>
  )
}

export {TodoListContainer}