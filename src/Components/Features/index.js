import React, { useState } from 'react'
import { FeaturesContainer, FeaturesBg, FeaturesContent,
        FeaturesRow, FeaturesColumn, Design, FeaturesH1,
        FeaturesDescription, FeaturesFlexContainer, ColumnContent,
        CardImg, CardText, CardDescription, ColumnContent2, 
        ImgCard, SwiperContainer, DescriptionContainer } from './FeaturesElements'
import design from '../../Image/featuresAssets/design.png'
import Bounce from 'react-reveal/Bounce';

import GenesisCollection from '../../Image/featuresAssets/cards/1.png'
import card2 from '../../Image/featuresAssets/cards/2.png'
import card3 from '../../Image/featuresAssets/cards/3.png'
import card4 from '../../Image/featuresAssets/cards/4.png'
import card5 from '../../Image/featuresAssets/cards/5.png'
import card6 from '../../Image/featuresAssets/cards/6.png'
import card7 from '../../Image/featuresAssets/cards/7.png'
import card8 from '../../Image/featuresAssets/cards/8.png'
import card9 from '../../Image/featuresAssets/cards/9.png'



import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

const Features = () => {

const card = { GenesisCollection, card2, card3, card4, card5, card6, card7, card8, card9 }

let [selected, setSelected] = useState(card.GenesisCollection);



  return (
    <FeaturesContainer>
        <FeaturesBg>

        </FeaturesBg>

        <FeaturesContent>
            <FeaturesRow>
                <FeaturesColumn>
                <Design src={design}/>
                    <DescriptionContainer>
                        
                        <FeaturesH1>FEATURES</FeaturesH1>
                        <FeaturesDescription>As the project aims to make a name for itself in the NFT Space, the main
                            brains behind Cyber Rabbit proposed similar yet reinvented mechanics of previous projects
                            in the industry, adding its authentic Cyber Rabbit motif and style in each. Hence, this
                            is what you should expect from Cyber Rabbit:
                        </FeaturesDescription>
                    </DescriptionContainer>

                    <FeaturesFlexContainer>
                        <ColumnContent>
                    
                            <CardImg src={selected}/>
                   
                            
                        </ColumnContent>

                        <ColumnContent2>
                            <CardText>
                                <CardDescription>
                                    Cyber Rabbit will release a Genesis
                                    collection of 1000 3D-rendered
                                    depictions of rabbits in futuristic
                                    attires with its very own utilities</CardDescription>
                            </CardText>
                        </ColumnContent2>

                            
                    </FeaturesFlexContainer>
                    <SwiperContainer>
                            <Swiper
                                slidesPerView={4}
                                spaceBetween={20}
                                className="mySwiper"
                                >
                                <SwiperSlide onClick={() => setSelected(card.GenesisCollection)}><ImgCard src={GenesisCollection}/></SwiperSlide>
                                <SwiperSlide onClick={() => setSelected(card.card2)}><ImgCard src={card2}/></SwiperSlide>
                                <SwiperSlide onClick={() => setSelected(card.card3)}><ImgCard src={card3}/></SwiperSlide>
                                <SwiperSlide onClick={() => setSelected(card.card4)}><ImgCard src={card4}/></SwiperSlide>
                                <SwiperSlide onClick={() => setSelected(card.card5)}><ImgCard src={card5}/></SwiperSlide>
                                <SwiperSlide onClick={() => setSelected(card.card6)}><ImgCard src={card6}/></SwiperSlide>
                                <SwiperSlide onClick={() => setSelected(card.card7)}><ImgCard src={card7}/></SwiperSlide>
                                <SwiperSlide onClick={() => setSelected(card.card8)}><ImgCard src={card8}/></SwiperSlide>
                                <SwiperSlide onClick={() => setSelected(card.card9)}><ImgCard src={card9}/></SwiperSlide>
                               
                            </Swiper>
                    </SwiperContainer>
                            

                </FeaturesColumn>
            </FeaturesRow>
        </FeaturesContent>

    </FeaturesContainer>
  )
}

export default Features