import React from "react"
import "../styles/TodoMessage.css"

function TodoMessage(){
  return (
    <div className="TodoMessage">
      <h4>Lita de tareas 📝</h4>
      <p>Lista de tareas creada por Fernando Dorantes</p>
      <p>Tienes 0 de 5 tareas completadas.</p>
    </div>
  )
}

export {TodoMessage}

