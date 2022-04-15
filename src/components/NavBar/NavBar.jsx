import React from 'react';
import './NavBar.css'
import {Link} from 'react-scroll';
const NavBar=()=>{
    return (
       <div className="n-wrapper">
           <div className="n-right">
               <div className="n-list">
                    <ul style={{listStyleType: 'none'}}>
                        <Link spy={true} to='NavBar' smooth={true} activeClass='activeClass'>
                        <li>Home</li>
                        </Link>
                        <Link spy={true} to='Services' smooth={true} activeClass='activeClass'>
                        <li>Services</li>
                        </Link>
                        <Link spy={true} to='Experience' smooth={true} activeClass='activeClass'>
                        <li>Experience</li>
                        </Link>
                        <Link spy={true} to='Portfolio' smooth={true} activeClass='activeClass'>
                        <li>Portfolio</li>
                        </Link>
                        <Link spy={true} to='NavBar' smooth={true} activeClass='activeClass'>
                        <li>Certifications</li>
                        </Link>
                        <Link spy={true} to='NavBar' smooth={true} activeClass='activeClass'>
                        <li>Publications</li>
                        </Link>
                        <Link spy={true} to='NavBar' smooth={true} activeClass='activeClass'>
                        <li>Contributions</li>
                        </Link>
                        <Link spy={true} to='Testimonials' smooth={true} activeClass='activeClass'>
                        <li>Testimonial</li>
                        </Link>
                    </ul>
               </div>
               <Link spy={true} to='connect' smooth={true} activeClass='activeClass'>
               <button className="button">Connect</button>
               </Link>
           </div>
       </div>
    )
}

export default NavBar;
