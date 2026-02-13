import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

const portfolioItems = [
    {
        title: "FarmLine - Livestock Booking",
        src: "/portfolio/farmline.png",
        url: "https://farmers.morrisons.com",
    },
    {
        title: "Morrisons Production App",
        src: "/portfolio/production-app.png",
        url: "https://manufacturing.apps.mymorri.com",
    },
];

const Portfolio=()=> {
    return (
        <div className="portfolio" id='Portfolio'>
            {/* Heading */}
            <span>Recent Projects</span>
            <span>Portfolio</span>
            {/* slider */}
            <Swiper
            spaceBetween={30}
            slidesPerView={2}
            grabCursor={true}
            className="portfolio-slider"
            breakpoints={{
                0: { slidesPerView: 1 },
                1100: { slidesPerView: 2 },
            }}
            >
                {portfolioItems.map((item) => (
                    <SwiperSlide key={item.title}>
                        <a href={item.url} target="_blank" rel="noreferrer" className="portfolio-shot-card">
                            <img src={item.src} alt={item.title}></img>
                            <span>{item.title}</span>
                        </a>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default Portfolio;
