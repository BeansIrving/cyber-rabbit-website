import React from 'react'
import { RoadmapContainer, RoadmapBg, RoadmapContent,
        RoadmapRow, RoadmapColumn, RoadmapUpperTitle,
        RoadmapBottomTitle, RoadmapTitle, SwiperContainer } from './RoadmapElements'

import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";


const Roadmap = () => {
  return (
    <RoadmapContainer>
        <RoadmapBg>

        </RoadmapBg>
        <RoadmapUpperTitle></RoadmapUpperTitle>
        <RoadmapBottomTitle></RoadmapBottomTitle>
      
        <RoadmapContent>
            <RoadmapRow>
                <RoadmapColumn>
                    <RoadmapTitle>Roadmap</RoadmapTitle>

             
                            <Swiper
                                slidesPerView={4}
                                spaceBetween={20}
                                className="mySwiper"
                                >
                                <SwiperSlide></SwiperSlide>
                                <SwiperSlide></SwiperSlide>
                                <SwiperSlide></SwiperSlide>
                                <SwiperSlide></SwiperSlide>
                             
                            </Swiper>
                   


                </RoadmapColumn>
            </RoadmapRow>
        </RoadmapContent>
    </RoadmapContainer>
  )
}

export default Roadmap