import React from 'react';
import './Country.css'

const Country = (props) => {
    const {name,flag,capital,population} = props.country;
    console.log(props.country)
    return (
        <div className='country'>
            <h2>This is {name}</h2>
            <img src={flag} alt="" />
            <p>Capital {capital}</p>
            <p>Population {population}</p>
        </div>
    );
};

export default Country;