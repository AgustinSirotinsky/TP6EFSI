import useEffect from 'react';
import React, { useState } from "react";


const ShowFlag = (props) => {
  const [text, OnChange] = useState(['']);
  //const [points, setPoints] = useState([]);

  const handleChange = (e) => {
    OnChange(e.target.value)
}
  const Validar = (event) => {
    props.setPoints(event.target.value);
    console.log(props.country.name)
    props.setPoints([...props.points, 0]);
    if(text == props.country.name){ //No hace lowercase
      props.setPoints(props.points.map(value => value + 10));
      props.setCountry(props.countries[Math.floor(Math.random() * 220)])
      OnChange('')
      alert("Correcto!")
    }
    else{
      props.setPoints(props.points.map(value => value - 1));
      alert("NO")
    }
  }
    return (
        <div>
          <img src={props.country.flag} alt="Bandera" />
          <br/>
          <div>
            <input type="text" value={text} onChange={handleChange} placeholder='Ingresar Bandera' />
            <button onClick={Validar}>Enviar</button> 
            <p>{`Tus puntos: ${props.points}`}</p> {/*No aparecen los puntos*/}
          </div>
        </div>
    );
}

export default ShowFlag;