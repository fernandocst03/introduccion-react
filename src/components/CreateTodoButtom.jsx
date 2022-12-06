import React from "react";
import "../styles/CreateTodoButtom.css"

function CreateTodoButtom({setOpenModal}){
  const click = () => {
    setOpenModal((open) => !open);
  }

  return(
    <button
      className="CreateTodoButtom"
      onClick={click}
    >
      +
    </button>
  );
}

export { CreateTodoButtom };