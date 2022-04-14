import React from 'react';
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import "./Services.css";
import Cards from '../Cards/Cards';
const Services = () => {
    return (
        <div className="services">
            {/* Left Side */}
            <div className="awesome">
            <span>My Awesome</span>
            <span>Services</span>
            <spane>
                Lorem ispum is simpley dummy text of printing of printing Lorem
                <br />
            ispum is simpley dummy text of printing
            </spane>

            <button className="button s-button"> Download CV</button>
            </div>
            <div className="blur s-blur1" style={{ background: '#ABF1FF94' }}></div>
            {/* Right Side */}
            <div className="cards" style={{left: '14rem'}}>
                <Cards
                image={HeartEmoji}
                heading={'Design'}
                detail={'Python Java NodeJS Jenkins React Angular AWS'}
                />
            </div>
            <div className="cards" style={{top: '12rem', left: '-4rem'}}>
                <Cards
                image={Glasses}
                heading={'Developer'}
                details={"HTML, JavaScript/TypeScript React, CSS"}
                />
            </div>
            <div className="cards" style={{top: '19rem', left: '12rem'}}>
                <Cards
                image={Humble}
                heading={'UI/UX'}
                details={'Some Dummy Text to be filled up later'}/>
            </div>
            <div className="blur s-blur2" style={{background: 'var(--purple)'}}></div>

        </div>

    )
}

export default Services;
