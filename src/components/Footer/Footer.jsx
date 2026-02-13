import React from 'react';
import Wave from '../../img/wave.png';
import { UilGithub as Github } from '@iconscout/react-unicons';
const Footer=()=>{
    return (
        <div className="footer">
            <img src={Wave.src} alt="" style={{width: '100%'}}></img>
            <div className="f-content">
                <span>someindras@gmail.com</span>
                <div className="f-icons">
                    <Github color='white' size='3rem' />
                </div>
            </div>
        </div>
    )
}

export default Footer;
