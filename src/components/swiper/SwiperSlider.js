import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./Swiper.css";

// import required modules
import { Pagination, Navigation } from "swiper";

export default function App() {
    return (
        <Swiper
            slidesPerView={3}
            spaceBetween={60}
            loop={true}
            pagination={{
                clickable: true,
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper"
        >
            <SwiperSlide>“
                Very interactive, i am not getting bored, enjoying ;) Thanks!

                “</SwiperSlide>
            <SwiperSlide>“
                Very interactive, i am not getting bored, enjoying ;) Thanks!

                “</SwiperSlide>
            <SwiperSlide>“
                Very interactive, i am not getting bored, enjoying ;) Thanks!

                “</SwiperSlide>
            <SwiperSlide>“
                Very interactive, i am not getting bored, enjoying ;) Thanks!

                “</SwiperSlide>
            <SwiperSlide>“
                Very interactive, i am not getting bored, enjoying ;) Thanks!

                “</SwiperSlide>
            <SwiperSlide>“
                Very interactive, i am not getting bored, enjoying ;) Thanks!

                “</SwiperSlide>
            <SwiperSlide>“
                Very interactive, i am not getting bored, enjoying ;) Thanks!

                “</SwiperSlide>
            <SwiperSlide>“
                Very interactive, i am not getting bored, enjoying ;) Thanks!

                “</SwiperSlide>
            <SwiperSlide>“
                Very interactive, i am not getting bored, enjoying ;) Thanks!

                “</SwiperSlide>
            <SwiperSlide>“
                Very interactive, i am not getting bored, enjoying ;) Thanks!

                “</SwiperSlide>
        </Swiper>
    );
}
