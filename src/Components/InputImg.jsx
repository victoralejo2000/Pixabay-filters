import React, { useState } from "react";
import { PintadonImg } from "./PintadonImg";

export const InputImg = () => {
  const [valorInput, setValorInput] = useState("perros");
  const captura = (e) => {
    e.preventDefault();
    let input = document.querySelector("input");
    setValorInput(input.value);
  };

  return (
    <>
    <div className="display:flex; align-items: center; margin-top: 2rem;">
    <div className="p-2 flex-fill">
        <h1>Proyecto Filter Pixabay</h1>
    </div>      
    <div>
      <form action="">        
        <input type="text" />
        <button onClick={captura}>Buscar</button>
      </form>
      <PintadonImg valor={valorInput} />
    </div>

    </div>
    </>
  );
};
