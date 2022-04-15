import React from 'react';
import './Work.css';
import Upwork from "../../img/Upwork.png";
import Fiverr from "../../img/fiverr.png";
import Amazon from "../../img/amazon.png";
import Shopify from "../../img/Shopify.png";
import Facebook from "../../img/Facebook.png";
const Work=()=>{
    return (
        <div className="work">
            {/* Left Side */}
            <div className="awesome">
            <span>Worked For All These</span>
            <span>Brands & Clients </span>
            <span>
                Lorem ispum is simpley dummy text of printing of printing Lorem
                <br />
                ispum is simpley dummy text of printing
                <br/>
                ispum is simpley dummy text of printing
                <br/>
                Lorem ispum is simpley dummy text of printing of printing Lorem
            </span>

            <button className="button s-button"> Hire Me.!</button>
            </div>
            <div className="blur s-blur1" style={{ background: '#ABF1FF94' }}></div>

            {/* Right Side */}
            <div className="w-right">
                <div className="w-mainCircle">
                    <div className="w-secCircle">
                        <img src={Upwork} alt=""></img>
                    </div>
                    <div className="w-secCircle">
                        <img src={Fiverr} alt=""></img>
                    </div>
                    <div className="w-secCircle">
                        <img src={Amazon} alt=""></img>
                    </div>
                    <div className="w-secCircle">
                        <img src={Shopify} alt=""></img>
                    </div>
                    <div className="w-secCircle">
                        <img src={Facebook} alt=""></img>
                    </div>

                    {/* Background Circle */}

                    <div className="w-backCircle blueCircle"></div>
                    <div className="w-backCircle yellowCircle"></div>


                </div>


            </div>



        </div>

    )
}

export default Work;