import React from 'react';
import { motion } from "framer-motion";

const companyLogos = [
    { name: "Verizon", src: "/logos/verizon.svg" },
    { name: "Centene", src: "/logos/centene.svg" },
    { name: "Morrisons", src: "/logos/morrisons.svg" },
    { name: "TCS", src: "/logos/tcs.svg" },
];

const Work = () => {
    return (
        <div className="work">
            {/* Left Side */}
            <div className="awesome">
                <span>Worked For All These</span>
                <span>Brands & Clients </span>
                <span>
                    Delivered enterprise-grade software across retail, telecom, and healthcare domains.
                <br />
                Built scalable full-stack systems with focus on performance, security, and maintainability.
                <br />
                Collaborated with cross-functional teams to ship reliable features from design to production.
                <br />
                Strong ownership mindset with consistent on-time delivery and measurable business impact.
            </span>

                <a href="https://www.linkedin.com/in/someindra-kumar-singh-329300117/" target="_blank" rel="noreferrer">
                    <button className="button s-button"> Hire Me.!</button>
                </a>
            </div>
            <div className="blur s-blur1" style={{ background: '#ABF1FF94' }}></div>

            {/* Right Side */}
            <div className="w-right">
                <motion.div
                    initial={{ rotate: 45 }}
                    whileInView={{ rotate: 0 }}
                    viewport={{ margin: "-40px" }}
                    transition={{ duration: 3.5, type: "spring" }}
                    className="w-mainCircle"
                >
                    {companyLogos.map((company) => (
                        <div
                            className={`w-secCircle ${company.name === "TCS" ? "w-secCircle-tcs" : ""}`}
                            key={company.name}
                        >
                            <img src={company.src} alt={`${company.name} logo`}></img>
                        </div>
                    ))}

                    {/* Background Circle */}

                    <div className="w-backCircle blueCircle"></div>
                    <div className="w-backCircle yellowCircle"></div>


                </motion.div>


            </div>



        </div>

    )
}

export default Work;
