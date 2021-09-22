import React from 'react';
import './Country.css'

const Country = (props) => {
    console.log(props)
    return (
        <div className='country'>
            <h2>This is {props.name}</h2>
            <p>Capital {props.capital}</p>
        </div>
    );
};

export default Country;