import './App.css';
import { useEffect, useState } from 'react';
import Countries from './components/Countries/Countries';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Countries></Countries>
    </div>
  );
}


















// function Countries(){
//   const [countries,setCountries] = useState([]);
//   useEffect(()=>{
//     fetch('https://raw.githubusercontent.com/ProgrammingHero1/rest-countries-data/main/coutries.JSON?fbclid=IwAR319ZwBtmXSFpyopiOLRg_yiQPgTJLGE-hDnttaQvVC2ZNG1yi6cp15mRU')
//     .then(res => res.json())
//     .then(data => setCountries(data))
    
//   },[])
//   return (
//     <div>
//       <h2>Travelling around the world</h2>
//       <h4>Countries Available : {countries.length}</h4>
//       {
//         countries.map(country => <Country name={country.name} capital={country.capital}></Country>)
//       }
//     </div>
//   )
// }

// function Country(props){
//   return (
//     <div>
//       <h2>{props.name}</h2>
//       <p>{props.capital}</p>
//     </div>
//   )
// }

export default App;
