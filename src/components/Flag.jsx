import React, { useSyncExternalStore } from "react";
import { useState,useEffect } from 'react';


const ShowFlag = (props) => {
  const [text, OnChange] = useState(['']);
  const [points, setPoints] = useState([]);

  const Validar = (event) => {
    setPoints(event.target.value);
    console.log(props.country.name)
    setPoints([...points, 0]);
    if(text==props.country.name){
      setPoints(points.map(value => value + 10));
      console.log("Correcto!")
    }
    else{
      setPoints(points.map(value => value - 1));
      console.log("incorrecto :(")
    }
  }
  const handleChange = (event) => {
    OnChange(event.target.value);
  };
    return (
        <div>
          <img src={props.country.flag} alt="Bandera" />
          <br/>
          <div>
            <input type="text" value={text} onChange={handleChange} placeholder='Ingresar Bandera' />
            <button onClick={Validar}>Enviar</button>
            <p>{text}</p> 
            <p>{`Tus putos: ${points}`}</p> 
          </div>
        </div>
    );
}

export default ShowFlag;