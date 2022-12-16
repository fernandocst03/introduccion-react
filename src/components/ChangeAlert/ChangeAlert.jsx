import React from "react";
import { useStorageListener } from "./useStorageListener";
import "./ChangeAlert.css";

function ChangeAlert({sincronize}) {
   const { show, toggleShow } = useStorageListener(sincronize);

   if (show) {
      return (
         <div className="changeAlert">
            <div className="alertMessage">
               <p>Hubo cambios</p>
               <button onClick={toggleShow}>Actualizar la información</button>
            </div>
         </div>
      );
   } else {
      return null;
   }
}
export { ChangeAlert };
