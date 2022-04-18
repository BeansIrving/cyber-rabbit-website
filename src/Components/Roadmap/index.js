import React from 'react'
import { RoadmapContainer, RoadmapBg, RoadmapContent,
        RoadmapRow, RoadmapColumn, RoadmapUpperTitle,
        RoadmapBottomTitle, RoadmapTitle,ColumnContent, InProgress,
        ColumnContent2, RoadmapH1, RoadmapLine, PhaseH1 } from './RoadmapElements'

import { FreeMode, Navigation, Thumbs } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import roadmapline from '../../Image/roadmapAssets/roadmapline.png'
import roadmaplineLeft from '../../Image/roadmapAssets/roadmaplineLeft.png'
import roadmaplineRight from '../../Image/roadmapAssets/roadmaplineRight.png'

import "./styleRoadmap.css";

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
                    <ColumnContent>
                        <RoadmapTitle>Roadmap</RoadmapTitle>
                    </ColumnContent>
                    
                    <ColumnContent2>
                        
                        <Swiper
                            slidesPerView={"auto"}
                            spaceBetween={3}
                         
                            navigation={true}
                            pagination={true}
                     

                      
                            modules={[FreeMode, Navigation, Thumbs, Pagination]}
                            className="mySwiperRoadmap"
                        >
                            <SwiperSlide className="mySwiperRoadmap-slide">
                                <RoadmapH1>&#10003; Achieve</RoadmapH1>
                                
                                <RoadmapLine src={roadmaplineLeft}/>

                                <PhaseH1>Phase 1</PhaseH1>

                                <div className='container'>
                                    <ul>
                                        <li className='li'>Cyber Rabbit Conceptualization</li>
                                        <li className='li'>Release of Cyber Rabbit Public Info</li>
                                        <li className='li'>Cyber Rabbit Discord and Social Media Public Release</li>
                                        <li className='li'>Cyber Rabbit Partnerships and Collaboration</li>
                                        <li className='li'>Massive Events and Contest to give way for the release of Cyber Rabbit: Genesis Collection</li>
                                    </ul>
                                </div> 
                                
                            </SwiperSlide>
                            
                            <SwiperSlide className="mySwiperRoadmap-slide">
                            <InProgress>In Progress</InProgress>

                            <RoadmapLine src={roadmapline}/>
                            
                            <PhaseH1>Phase 2</PhaseH1>

                                <div className='container'>
                                    <ul>
                                        <li className='li'>Cyber Rabbit: Genesis Collection Public Launch</li>
                                        <li className='li'>Website Redesign and Rework</li>
                                        <li className='li'>Start of Genesis Collection $CARROT yielding </li>
                                        <li className='li'>Launch of the Exclusive Advisory x Partnership Community on Cyber Rabbit’s own Discord Server</li>
                                        <li className='li'>Launch of the Breeding Platform for the Genesis Collection</li>
                                        <li className='li'>Launch of the Exclusive Collaboration Space on the Cyber Rabbit’s Website</li>
                                    </ul>
                                </div>   
                            </SwiperSlide>
                            
                            <SwiperSlide className="mySwiperRoadmap-slide">
                            <InProgress>In Progress</InProgress>

                            <RoadmapLine src={roadmapline}/>

                            <PhaseH1>Phase 3</PhaseH1>

                                <div className='container'>
                                    <ul>
                                        <li className='li'>Main Collection Launch</li>
                                        <li className='li'>Cyber Rabbit Staking Platform and Mechanic Launch </li>
                                        <li className='li'>Contests and Events for Cyber Rabbit’s furtherment of Advocacy </li>
                                        <li className='li'>Future Exclusive Events for Cyber Rabbit Supporters and holders</li>
                                    </ul>
                                </div>   
                            </SwiperSlide>
                            
                            <SwiperSlide className="mySwiperRoadmap-slide">
                            <InProgress>In Progress</InProgress>

                            <RoadmapLine src={roadmaplineRight}/>

                            <PhaseH1>Phase 4</PhaseH1>

                                <div className='container'>
                                    <ul>
                                        <li className='li'>2nd Generation Collection Launch</li>
                                        <li className='li'>Cyber Rabbit: META Arena Metaverse Game for the Main Collection Launch </li>
                                        <li className='li'>Land Purchase and Partnership with Sandbox to give way for 2nd Gen Metaverse Implication</li>
                                        <li className='li'>Sandbox game for the 2nd Generation Launch</li>
                                        <li className='li'>DAO Governance</li>
                                    </ul>
                                </div>   
                            </SwiperSlide>
                            
                        </Swiper>
                   

                    </ColumnContent2>

             

                </RoadmapColumn>
            </RoadmapRow>
        </RoadmapContent>
    </RoadmapContainer>
  )
}

export default Roadmap