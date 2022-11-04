import React, { useState, useEffect } from "react";
import {
  FeaturesContainer,
  FeaturesBg,
  FeaturesContent,
  FeaturesRow,
  FeaturesColumn,
  Design,
  FeaturesH1,
  FeaturesDescription,
  FeaturesFlexContainer,
  ColumnContent,
  CardImg,
  CardText,
  CardDescription,
  ColumnContent2,
  ImgCard,
  DescriptionContainer,
} from "./FeaturesElements";
import design from "../../Image/featuresAssets/design.png";
import Aos from "aos";
import "aos/dist/aos.css";

import GenesisCollection from "../../Image/featuresAssets/cards/1.webp";
import card2 from "../../Image/featuresAssets/cards/2.webp";
import card3 from "../../Image/featuresAssets/cards/3.webp";
import card4 from "../../Image/featuresAssets/cards/4.webp";
import card5 from "../../Image/featuresAssets/cards/5.webp";
import card6 from "../../Image/featuresAssets/cards/6.webp";
import card7 from "../../Image/featuresAssets/cards/7.webp";
import card8 from "../../Image/featuresAssets/cards/8.webp";
import card9 from "../../Image/featuresAssets/cards/9.webp";

import "./styleFeatures.css";

import { FreeMode, Navigation, Thumbs } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

const Features = () => {
  useEffect(() => {
    Aos.init({});
  }, []);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const card = {
    GenesisCollection,
    card2,
    card3,
    card4,
    card5,
    card6,
    card7,
    card8,
    card9,
  };

  let [selected, setSelected] = useState(card.GenesisCollection);
  let [textGenesis, setTextGenesis] = useState(
    "Cyber Rabbit will release a Genesis collection of 1000 3D-rendered depictions of rabbits in futuristic attires with its very own utilities"
  );

  return (
    <FeaturesContainer>
      <FeaturesBg></FeaturesBg>

      <FeaturesContent>
        <FeaturesRow>
          <FeaturesColumn>
            <Design src={design} />

            <DescriptionContainer data-aos="fade-up" data-aos-duration="500">
              <FeaturesH1 id="features">FEATURES</FeaturesH1>
              <FeaturesDescription>
                As the project aims to make a name for itself in the NFT Space,
                the main brains behind Cyber Rabbit proposed similar yet
                reinvented mechanics of previous projects in the industry,
                adding its authentic Cyber Rabbit motif and style in each.
                Hence, this is what you should expect from Cyber Rabbit:
              </FeaturesDescription>

              <div id="container-c316134ff7484972d0181e3216b2fc72"></div>
            </DescriptionContainer>

            <FeaturesFlexContainer>
              <ColumnContent data-aos="flip-left" data-aos-duration="800">
                <CardImg src={selected} />
              </ColumnContent>

              <ColumnContent>
                <CardText>
                  <CardDescription>{textGenesis}</CardDescription>
                </CardText>
              </ColumnContent>

              <ColumnContent2>
                <Swiper
                  data-aos="flip-up"
                  data-aos-duration="800"
                  slidesPerView={"auto"}
                  spaceBetween={0}
                  loop={true}
                  navigation={true}
                  pagination={true}
                  thumbs={{ swiper: thumbsSwiper }}
                  modules={[FreeMode, Navigation, Thumbs, Pagination]}
                  className="mySwiperFeatures"
                >
                  <SwiperSlide
                    className="mySwiperFeatures-slide"
                    onClick={() =>
                      setSelected(card.GenesisCollection) ||
                      setTextGenesis(
                        "Cyber Rabbit will release a Genesis collection of 1000 3D-rendered depictions of rabbits in futuristic attires with its very own utilities"
                      )
                    }
                  >
                    <ImgCard src={GenesisCollection} />
                  </SwiperSlide>
                  <SwiperSlide
                    className="mySwiperFeatures-slide"
                    onClick={() =>
                      setSelected(card.card2) ||
                      setTextGenesis(
                        "A Portion of funds collected from the public sale will be donated to community chosen charities/foundations that will help to buy food and shelter for these animals."
                      )
                    }
                  >
                    <ImgCard src={card2} />
                  </SwiperSlide>
                  <SwiperSlide
                    className="mySwiperFeatures-slide"
                    onClick={() =>
                      setSelected(card.card3) ||
                      setTextGenesis(
                        "The holders of the Genesis collection will be able to breed their 2 Genesis NFT to yield Main Collection Cyber Rabbit using $CARROT tokens."
                      )
                    }
                  >
                    <ImgCard src={card3} />
                  </SwiperSlide>
                  <SwiperSlide
                    className="mySwiperFeatures-slide"
                    onClick={() =>
                      setSelected(card.card4) ||
                      setTextGenesis(
                        "Cyber Rabbit will release the main collection with future applications in the Play and Earn Field of the Metaverse."
                      )
                    }
                  >
                    <ImgCard src={card4} />
                  </SwiperSlide>
                  <SwiperSlide
                    className="mySwiperFeatures-slide"
                    onClick={() =>
                      setSelected(card.card5) ||
                      setTextGenesis(
                        "NFT staking platform allows the user to stake their Main Collection NFT, earning a utility Token that will mainly be used to purchase 2nd Generation VX NFT."
                      )
                    }
                  >
                    <ImgCard src={card5} />
                  </SwiperSlide>
                  <SwiperSlide
                    className="mySwiperFeatures-slide"
                    onClick={() =>
                      setSelected(card.card6) ||
                      setTextGenesis(
                        "The Play and Earn combat game of Cyber Rabbit can be played by having a Main Collection Cyber Rabbit NFT."
                      )
                    }
                  >
                    <ImgCard src={card6} />
                  </SwiperSlide>
                  <SwiperSlide
                    className="mySwiperFeatures-slide"
                    onClick={() =>
                      setSelected(card.card7) ||
                      setTextGenesis(
                        "Cyber Rabbit will release a 2nd Generation VX NFT collection that can be acquired using a utility token."
                      )
                    }
                  >
                    <ImgCard src={card7} />
                  </SwiperSlide>
                  <SwiperSlide
                    className="mySwiperFeatures-slide"
                    onClick={() =>
                      setSelected(card.card8) ||
                      setTextGenesis(
                        "Finally, Cyber Rabbit will have its metaverse on Sandbox."
                      )
                    }
                  >
                    <ImgCard src={card8} />
                  </SwiperSlide>
                  <SwiperSlide
                    className="mySwiperFeatures-slide"
                    onClick={() =>
                      setSelected(card.card9) ||
                      setTextGenesis(
                        "Cyber Rabbit will have voting mechanisms that are to be given to its supporters, where they will hold a massive opinion over the future progressions of the project. "
                      )
                    }
                  >
                    <ImgCard src={card9} />
                  </SwiperSlide>
                </Swiper>
              </ColumnContent2>
            </FeaturesFlexContainer>
          </FeaturesColumn>
        </FeaturesRow>
      </FeaturesContent>
    </FeaturesContainer>
  );
};

export default Features;
