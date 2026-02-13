import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
const Testimonial=()=> {

    const clients = [
        {
          company: "Morrisons",
          img: "/logos/morrisons.svg",
          review:
            "Delivered production-ready features with strong ownership and speed. The quality of execution helped us move faster without compromising reliability.",
        },
        {
          company: "TCS",
          img: "/logos/tcs.svg",
          review:
            "Demonstrated deep engineering discipline across full-stack delivery and collaboration. Consistently converted complex requirements into maintainable solutions.",
        },
        {
          company: "Verizon",
          img: "/logos/verizon.svg",
          review:
            "Brought a practical, results-driven approach to building scalable systems. Communication and technical rigor made delivery smooth across teams.",
        },
        {
          company: "Centene",
          img: "/logos/centene.svg",
          review:
            "Strong backend and platform skills with clear focus on security and performance. Contributions directly improved system stability and developer velocity.",
        },
      ];


    return (
        <div className="t-wrapper" id='Testimonials'>
            <div className="t-heading">
                <span>Clients Always get</span>
                <span>Exceptional Work from me</span>
                <span>From me...</span>
                <div className="blur t-blur1" style={{background: 'var(--purple)'}} ></div>
                <div className="blur t-blur2" style={{background: 'skyblue'}}></div></div>

        {/* Slider */}
        <Swiper
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
            {clients.map((client, index)=> {
                return (
                    <SwiperSlide key={index}>
                        <div className="testimonial">
                            <img src={client.img} alt={`${client.company} logo`}></img>
                            <h4>{client.company}</h4>
                            <span>{client.review}</span>
                        </div>
                    </SwiperSlide>
                )
            })}
        </Swiper>
        </div>
    )
}

export default Testimonial;
