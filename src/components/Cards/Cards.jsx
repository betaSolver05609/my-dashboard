import React from 'react';
import './Cards.css'
const Cards=({image, heading, detail})=>{
    return (
        <div className="card">
            <img src={image} alt=""></img>
            <span>{heading}</span>
            <span>{detail}</span>
            <button className="button">Learn More</button>
        </div>
    )
}

export default Cards;