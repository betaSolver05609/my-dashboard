import React from 'react';
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import Cards from '../Cards/Cards';
import {motion} from 'framer-motion';
const Services = () => {

    const transition= {duration: 2, type: 'spring'}

    return (
        <div className="services" id='Services'>
            {/* Left Side */}
            <div className="awesome">
            <span>My Awesome</span>
            <span>Services</span>
            <spane>
                As a full Stack developer, I work with a wide range of technologies and tools 
                <br />
            to create Softwares and Systems
            </spane>

            <button className="button s-button"> Download CV</button>
            </div>
            <div className="blur s-blur1" style={{ background: '#ABF1FF94' }}></div>
            {/* Right Side */}
            <motion.div 
            initial={{left: '25%'}}
            whileInView={{left: '14rem'}}
            transtion={transition}
            className="cards" 
            >
                <Cards
                image={HeartEmoji.src}
                heading={'Programming Languages'}
                detail={'Python Java JavaScript C++'}
                />
            </motion.div>
            <motion.div 
             initial={{ left: "-11rem", top: "12rem" }}
             whileInView={{ left: "-4rem" }}
             transition={transition}
            className="cards" 
            >
                <Cards
                image={Glasses.src}
                heading={'Frameworks'}
                detail={"React Next Angular SpringBoot SpringJPA SpringSecurity, Express, Flask" }
                />
            </motion.div>
            <motion.div 
             initial={{ top: "19rem", left: "25rem" }}
             whileInView={{ left: "12rem" }}
             transition={transition}
            className="cards" 
            >
                <Cards
                image={Humble.src}
                heading={'Cloud Platforms'}
                detail={'AWS, terraform, docker, kubernetes, Kafka'}/>
            </motion.div>
            <div className="blur s-blur2" style={{background: 'var(--purple)'}}></div>

        </div>

    )
}

export default Services;
