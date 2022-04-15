import React from 'react';
import './Portfolio.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Sidebar from "../../img/sidebar.PNG";
import Ecommerce from "../../img/ecommerce.png";
import HOC from "../../img/hoc.png";
import MusicApp from "../../img/musicapp.png";

const Portfolio=()=> {
    return (
        <div className="portfolio" id='Portfolio'>
            {/* Heading */}
            <span>Recent Projects</span>
            <span>Portfolio</span>
            {/* slider */}
            <Swiper
            spaceBetween={30}
            slidesPerView={3}
            grabCursor={true}
            className="portfolio-slider"
            >
                <SwiperSlide>
                    <img src={Sidebar} alt=""></img>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Ecommerce} alt=""></img>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={HOC} alt=""></img>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={MusicApp} alt=""></img>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default Portfolio;
