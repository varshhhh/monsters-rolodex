/* eslint-disable no-template-curly-in-string */
import React from 'react';
import './card.style.css'

export const Card = (props) =>(
    <div className='card-container'>
    <img alt="monster" src={"https://robohash.org/{math.RAND()}"}/>
    <h2>{props.monster.name}</h2>
    </div>
    
);