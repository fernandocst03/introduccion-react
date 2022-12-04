import React from "react"
import "../styles/TodoListContainer.css"

function TodoLisContainer(props){
  return(
    <div className="TodoLisContainer">
      {props.children}
    </div>
  )
}

export {TodoLisContainer}