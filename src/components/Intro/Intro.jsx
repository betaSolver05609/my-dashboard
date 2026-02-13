import React from 'react';
import Github from '../../img/github.png';
import LinkedIn from '../../img/linkedin.png';
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import boy from "../../img/boy1.png";
import glassesimoji from "../../img/glassesimoji.png";
import thumbup from "../../img/thumbup.png";
import crown from "../../img/crown.png";
import FloatingDiv from '../FloatingDiv/FloatingDiv';
import {motion} from 'framer-motion';
const Intro=()=>{

    const transition= {duration: 2, type: 'spring'}

    return (
    <div className="intro">
        <div className="i-left">
            <div className="i-name">
                <span>Hi There.! I Am</span>
                <span>Someindra Singh</span>
                <ul style={{listStyleType: 'none'}}>
                    <li>I am a Full Stack Developer</li>
                    <li>IT Analyst</li>
                    <li>Designing Scalable High performance and Optimized Solutions</li>
                </ul>
                </div>
                <a href="https://www.linkedin.com/in/someindra-kumar-singh-329300117/" target="_blank" rel="noreferrer">
                    <button className="button i-button">Hire Me</button>
                </a>
                <div className="i-icons">
                    <a href="https://github.com/betaSolver05609" target="_blank" rel="noreferrer"><img src={Github.src} alt=""></img></a>
                    <a href="https://www.linkedin.com/in/someindra-kumar-singh-329300117/" target="_blank" rel="noreferrer"><img src={LinkedIn.src} alt="LinkedIn"></img></a>
                </div>
        </div>
        <div className="i-right">
            <img src={Vector1.src} alt=""></img>
            <img src={Vector2.src} alt=""></img>
            <img src={boy.src} alt=""></img>
            <motion.img 
            initial = {{left: '-36%'}}
            whileInView = {{left: '-24%'}}
            transition={transition}
            src={glassesimoji.src} alt=""/>
            <motion.div 
            initial={{top: '-4%', left: '74%'}}
            whileInView={{left: '68%'}}
            transition={transition}
            style={{top: '-4%'}}
            >
            <FloatingDiv image={crown.src} text1='Full Stack' text2='Developer'/>
            </motion.div>
            <motion.div 
            initial = {{left: '9rem', top: '18rem'}}
            whileInView = {{left: '0rem'}}
            transition={transition}
            style={{top: '64%'}}>
                <FloatingDiv image={thumbup.src} text1='Quantum Computing' text2='Researcher'/></motion.div>
            {/*Blur Divs */}
            <div className='blur' style={{background: 'rgb(238, 210, 255'}}></div>
            <div className='blur' style={{background: '#C1F5FF', top: '17rem', width: '21rem', height: '11rem', left: '-9rem'}}></div>
        </div>

    </div>
    )
}

export default Intro;

