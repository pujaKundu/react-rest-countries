import React, { useState } from 'react';
import { useEffect } from 'react';
import Country from '../Country/Country';
import './Countries.css'

const Countries = () => {
    const [countries,setCountries] = useState([]);
    useEffect(() =>{
        fetch('https://raw.githubusercontent.com/ProgrammingHero1/rest-countries-data/main/coutries.JSON?fbclid=IwAR3A6JIH6ZTDSDkH-e-8WHzhQif4yt-Rpt1CqC4zMxV9VWdNa6Ck7yakNw4')
        .then(res => res.json())
        .then(data => setCountries(data))
    },[])
    return (
        <div>
            <h1>This is countries in its own file</h1>
            <div className='countries-container'>
            {
                countries.map(country => <Country 
                    key = {country.capital}
                    country = {country}
                    
                    ></Country>)
            }
            </div>
           
        </div>
    );
};

export default Countries;