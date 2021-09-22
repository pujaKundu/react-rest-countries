import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
      <Countries></Countries>
    </div>
  );
}

function Countries(){
  const [countries,setCountries] = useState([]);
  useEffect(()=>{
    fetch('https://raw.githubusercontent.com/ProgrammingHero1/rest-countries-data/main/coutries.JSON?fbclid=IwAR319ZwBtmXSFpyopiOLRg_yiQPgTJLGE-hDnttaQvVC2ZNG1yi6cp15mRU')
    .then(res => res.json())
    .then(data => setCountries(data))
    
  },[])
  return (
    <div>
      <h2>Travelling around the world</h2>
      <h4>Countries Available : {countries.length}</h4>
    </div>
  )
}

export default App;
