import './App.css';
import { useState,useEffect } from 'react';
import ShowFlag from './components/Flag';

function App() {
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState([]);
  const [points, setPoints] = useState([]);
  
  useEffect(() => {
    fetch('https://countriesnow.space/api/v0.1/countries/flag/images')
    .then(res => res.json())
    .then(res => {
      setCountries(res.data);
      const number = Math.floor(Math.random()*220)
      setCountry(res.data[number])
    })
    .catch(err => console.log(err));
  }, []);

  return (
    <div className="App">
      <h1>React App</h1>
      <ShowFlag countries={countries} country={country} setCountry={setCountry} points={points} setPoints={setPoints}/>
    </div>
  );
}

export default App;