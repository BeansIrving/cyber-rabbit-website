import React, {useState, useEffect} from 'react'
import { TeamContainer, TeamBg, TeamContent, 
        TeamRow, TeamColumn, TeamH1, TeamH1v2, 
        TeamP, TeamName, TeamTitle, TeamDescription,
        ImgWrapper, TeamImg, ColumnContent, ColumnContent2,
        TextWrapper} from './TeamElements'

import { EffectCoverflow, Pagination, FreeMode, Navigation, Thumbs } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


import { Swiper, SwiperSlide } from "swiper/react";
import "./styleTeam.css";

import Aos from "aos";
import "aos/dist/aos.css"

import Founder from "../../Image/teamAssets/1.webp"
import CoFounder from "../../Image/teamAssets/2.webp"
import ConceptArtist from "../../Image/teamAssets/3.webp"
import Artist from "../../Image/teamAssets/4.webp"
import FrontendDeveloper from "../../Image/teamAssets/5.webp"
import BackendDeveloper from "../../Image/teamAssets/6.webp"
import GraphicsDesigner from "../../Image/teamAssets/7.webp"
import UIUXDeveloper from "../../Image/teamAssets/8and10.webp"
import GameDeveloper from "../../Image/teamAssets/9.webp"
import CommunityRelations from "../../Image/teamAssets/8and10.webp"

const Team = () => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    useEffect(() =>{
        Aos.init({ });
      },[])
  return (
    <TeamContainer>
        <TeamBg>
            
        </TeamBg>

        <TeamContent>
            <TeamRow>
                <TeamColumn>
                <TeamH1>MEET</TeamH1>
                        <TeamH1v2 id='team'>THE TEAM</TeamH1v2>
                        <TeamP>
                            Welcome to Cyber Rabbit, as an act of transparency, we want to give you guys a brief intro 
                            as to who the team behind the coolest rabbits in the Metaverse is formed of, and so, here they are! 
                        </TeamP>
                    <ColumnContent>
                        

                        
                    </ColumnContent>
                    
                    <ColumnContent2>
                    <Swiper
                            slidesPerView={"auto"}
                            spaceBetween={30}
                            
                            navigation={true}
                    
                           
                            thumbs={{ swiper: thumbsSwiper }}
                            modules={[FreeMode, Navigation, Thumbs]}
                            className="mySwiperTeam"
                        >
                            <SwiperSlide className="mySwiperTeam-slide">

                            <ImgWrapper 
                            data-aos="fade-down"
                            data-aos-duration="1000">
                                <TeamImg src={Founder} />
                            </ImgWrapper>
                            
                            <TextWrapper
                            data-aos="fade-up"
                            data-aos-duration="1000">
                                <TeamName>Carnage</TeamName>
                                <TeamTitle>Founder</TeamTitle>

                                <TeamDescription>
                                    An experienced cryptocurrency and blockchain enthusiast, The man became an institution for all things crypto and NFT over the years. Now acting as the founder of Cyber Rabbit, he aims to exhaust all of his gathered knowledge and experience in creating a one-of-a-kind project.
                                </TeamDescription>
                            </TextWrapper>
                            
                                
                            </SwiperSlide>


                            <SwiperSlide className="mySwiperTeam-slide">

                            <ImgWrapper
                            data-aos="fade-down"
                            data-aos-duration="1000">
                                <TeamImg src={CoFounder}/>
                            </ImgWrapper>
                            
                            <TextWrapper
                            data-aos="fade-up"
                            data-aos-duration="1000">
                                <TeamName>Devon</TeamName>
                                <TeamTitle>Co-Founder</TeamTitle>

                                <TeamDescription>
                                An experienced crypto enthusiast like CarnageXD, and a seasoned project lead, Devon is using his people skills and knowledge of the NFT space to ensure that Cyber Rabbit is a success
                                </TeamDescription>
                            </TextWrapper>
                            
                                
                            </SwiperSlide>

                            <SwiperSlide className="mySwiperTeam-slide">

                            <ImgWrapper
                            data-aos="fade-down"
                            data-aos-duration="1000">
                                <TeamImg src={ConceptArtist}/>
                            </ImgWrapper>

                            <TextWrapper
                            data-aos="fade-up"
                            data-aos-duration="1000">

                                <TeamName>Chamber Main</TeamName>
                                <TeamTitle>Concept Artist</TeamTitle>

                                <TeamDescription>
                                The idea factory behind Cyber Rabbit, Chamber Main creates novel concepts, and mobilizes them into fruition. He also doubles as Cyber Rabbit's head moderator during down times and ensures that the space is safe and enjoyable.
                                </TeamDescription>

                            </TextWrapper>
                            </SwiperSlide>
                            
                            <SwiperSlide className="mySwiperTeam-slide">

                            <ImgWrapper
                            data-aos="fade-down"
                            data-aos-duration="1000">
                                <TeamImg src={Artist}/>
                            </ImgWrapper>
                            
                            <TextWrapper
                            data-aos="fade-up"
                            data-aos-duration="1000">
                                <TeamName>Vaizen</TeamName>
                                <TeamTitle>3D Artist</TeamTitle>

                                <TeamDescription>
                                Brings the Cyber Rabbits to life with his exceptional skills in digital artistry. His years of experience in said field allowed him to create beautiful depictions of Cyber Rabbits that we enjoy today 
                                </TeamDescription>
                            </TextWrapper>
                            
                                
                            </SwiperSlide>
                            
                            <SwiperSlide className="mySwiperTeam-slide">

                            <ImgWrapper
                            data-aos="fade-down"
                            data-aos-duration="1000">
                                <TeamImg src={FrontendDeveloper}/>
                            </ImgWrapper>

                            <TextWrapper
                            data-aos="fade-up"
                            data-aos-duration="1000">
                               <TeamName>BinZ</TeamName>
                                <TeamTitle>Frontend Developer</TeamTitle>

                                <TeamDescription>
                                Binz's aptitude for making breathtaking yet user-friendly websites is something invaluable, thus earning him the chance to partake in showcasing the Coolest Rabbits in the Metaverse, the Binz Way. 
                                </TeamDescription>
                            </TextWrapper>

                         
                                
                            </SwiperSlide>
                            
                            <SwiperSlide className="mySwiperTeam-slide">

                            <ImgWrapper
                            data-aos="fade-down"
                            data-aos-duration="1000">
                                <TeamImg src={BackendDeveloper}/>
                            </ImgWrapper>

                            <TextWrapper
                            data-aos="fade-up"
                            data-aos-duration="1000">

                                <TeamName>RZRKT</TeamName>
                                <TeamTitle>Solidity/Backend Developer</TeamTitle>

                                <TeamDescription>
                                RZRKT is a decorated man in the cryptocurrency industry for mobilizing multiple projects' backend mechanisms during his freelance days. As Cyber Rabbit's very own Backend Developer, he's a valuable asset that the project deserves.   
                                </TeamDescription>

                            </TextWrapper>

                            
                                
                            </SwiperSlide>
                            
                            <SwiperSlide className="mySwiperTeam-slide">

                            <ImgWrapper
                            data-aos="fade-down"
                            data-aos-duration="1000">
                                <TeamImg src={GraphicsDesigner}/>
                            </ImgWrapper>

                            <TextWrapper
                            data-aos="fade-up"
                            data-aos-duration="1000">
                                <TeamName>UID and Delacroix</TeamName>
                                <TeamTitle>Graphics Designer</TeamTitle>

                                <TeamDescription>
                                UID and Delacroix’s ability to create appealing pieces of digital art, specifically catered towards advertisement and information sharing, something Cyber Rabbit needs. Thus, they are tasked with working hand-in-hand with team members to create beautiful banners, signs, and our very own logo! 
                                </TeamDescription>
                            </TextWrapper>

                            
                                
                            </SwiperSlide>
                            
                            <SwiperSlide className="mySwiperTeam-slide">

                            <ImgWrapper
                            data-aos="fade-down"
                            data-aos-duration="1000">
                                <TeamImg src={UIUXDeveloper}/>
                            </ImgWrapper>

                            <TextWrapper
                            data-aos="fade-up"
                            data-aos-duration="1000">
                                <TeamName>_Eclipse and HEMALI</TeamName>
                                <TeamTitle>UI/UX Developer</TeamTitle>

                                <TeamDescription>
                                These talented people are working collaboratively with the Developer Team to put User Experience in top priority once Cyber Rabbit is onboarded to the people, using their experience in handling large groups socially through the course of their career. 
                                </TeamDescription>
                            </TextWrapper>

                         
                                
                            </SwiperSlide>
                            
                            <SwiperSlide className="mySwiperTeam-slide">

                            <ImgWrapper
                            data-aos="fade-down"
                            data-aos-duration="1000">
                                <TeamImg src={GameDeveloper}/>
                            </ImgWrapper>

                            <TextWrapper
                            data-aos="fade-up"
                            data-aos-duration="1000">
                                <TeamName>NIVREH</TeamName>
                                <TeamTitle>Game Developer</TeamTitle>

                                <TeamDescription>
                                His portfolio is decorated with multiple games under his supervision, at times his creation, someone of his caliber is something Cyber Rabbit needed for the creation of its very own Play and Earn game in the foreseeable future. 
                                </TeamDescription>
                            </TextWrapper>

                           
                                
                            </SwiperSlide>
                            
                            <SwiperSlide className="mySwiperTeam-slide">

                            <ImgWrapper
                            data-aos="fade-down"
                            data-aos-duration="1000">
                                <TeamImg src={CommunityRelations}/>
                            </ImgWrapper>
                            <TextWrapper 
                            data-aos="fade-up"
                            data-aos-duration="1000">
                                <TeamName>Miss.Z_I</TeamName>
                                <TeamTitle>Community Relations</TeamTitle>

                                <TeamDescription>
                                The magnitude of her connections with people and entities within the cryptocurrency and NFT space is second to none, and is in result being exhausted whenever necessary to ensure that Cyber Rabbit becomes a staple name in the NFT industry! 
                                </TeamDescription>
                            </TextWrapper>
                           
                                
                            </SwiperSlide>
                            
                          
                            
                        </Swiper>
                    </ColumnContent2>
                    
                   
                </TeamColumn>
            </TeamRow>
        </TeamContent>
    </TeamContainer>
  )
}

export default Team