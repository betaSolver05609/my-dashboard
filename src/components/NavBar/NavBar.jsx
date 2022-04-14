import React from 'react';
import './NavBar.css'
const NavBar=()=>{
    return (
       <div className="n-wrapper">
           <div className="n-right">
               <div className="n-list">
                    <ul style={{listStyleType: 'none'}}>
                        <li>Home</li>
                        <li>Services</li>
                        <li>Experience</li>
                        <li>Portfolio</li>
                        <li>Certifications</li>
                        <li>Publications</li>
                        <li>Contributions</li>
                        <li>Testimonial</li>
                    </ul>
               </div>
               <button className="button">Connect</button>
           </div>
       </div>
    )
}

export default NavBar;
