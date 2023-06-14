import React, { useEffect, useState } from 'react';
import './App.css';
import { getList } from './components/list';

function App() {
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState([]);

  useEffect(()=>{
    fetch('https://countriesnow.space/api/v0.1/countries/flag/images')
      .then(data => data.json())
      .then(res=>(
        setCountries(res.data)
      ));
  }
  )

  useEffect(() => {
    let mounted = true;
    getList()
      .then(items => {
        if(mounted) {
          setList(items)
        }
      })
    return () => mounted = false;
  }, [])

  return(
    <div className="wrapper">
     <h1>Lista :D</h1>
     <ul>
       {console.log(list)}
     </ul>
   </div>
  )
}

export default App;