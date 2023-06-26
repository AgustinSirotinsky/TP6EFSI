import React, { useSyncExternalStore } from "react";
import { useState,useEffect } from 'react';

const ShowFlag = (props) => {
  const [text, OnChange] = useState(['']);

  function Validar() {
    if(text==props.country.name){
      props.setPoints = props.points + 10;
    }
    else{
      props.setPoints = props.points - 1;
    }
  }

    return (
        <div>
          <img src={props.country.flag} alt="Bandera" />
          <br/>
          <input OnChange={OnChange} placeholder='Ingresar Bandera'></input>
          <br/>
          <button onClick={Validar}>Enviar</button>
        </div>
    );
}

export default ShowFlag;