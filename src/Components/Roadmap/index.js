import React, { useEffect, useState } from "react";
import {
  RoadmapContainer,
  RoadmapBg,
  RoadmapContent,
  RoadmapRow,
  RoadmapColumn,
  ColumnContent,
  RoadmapImg,
  DetailsImg,
  SwiperContainer,
  PhaseImg,
  SwiperContainer1366px,
} from "./RoadmapElements";

import { Swiper, SwiperSlide } from "swiper/react";

import {
  EffectCoverflow,
  Pagination,
  FreeMode,
  Navigation,
  Thumbs,
} from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styleRoadmap.css";

import Aos from "aos";
import "aos/dist/aos.css";

import roadmap from "../../Image/roadmapAssets/roadmaprevamped.webp";
import details from "../../Image/roadmapAssets/Details.webp";

import phase1 from "../../Image/roadmapAssets/phase1.webp";
import phase2 from "../../Image/roadmapAssets/phase2.webp";
import phase3 from "../../Image/roadmapAssets/phase3.webp";
import phase4 from "../../Image/roadmapAssets/phase4.webp";

const Roadmap = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  useEffect(() => {
    Aos.init({});
  }, []);
  return (
    <RoadmapContainer id="roadmap">
      <RoadmapBg></RoadmapBg>

      <RoadmapContent>
        <RoadmapRow>
          <RoadmapColumn>
            <ColumnContent>
              <RoadmapImg src={roadmap} />

              <DetailsImg src={details} />
            </ColumnContent>

            <ColumnContent>
              <SwiperContainer>
                <Swiper
                  slidesPerView={4}
                  spaceBetween={30}
                  navigation={true}
                  thumbs={{ swiper: thumbsSwiper }}
                  modules={[FreeMode, Navigation, Thumbs]}
                  className="mySwiper-Roadmap"
                >
                  <SwiperSlide className="mySwiper-Roadmap-Slide">
                    <PhaseImg src={phase1} />
                  </SwiperSlide>

                  <SwiperSlide className="mySwiper-Roadmap-Slide">
                    <PhaseImg src={phase2} />
                  </SwiperSlide>

                  <SwiperSlide className="mySwiper-Roadmap-Slide">
                    <PhaseImg src={phase3} />
                  </SwiperSlide>

                  <SwiperSlide className="mySwiper-Roadmap-Slide">
                    <PhaseImg src={phase4} />
                  </SwiperSlide>
                </Swiper>
              </SwiperContainer>

              <SwiperContainer1366px>
                <Swiper
                  effect={"coverflow"}
                  spaceBetween={100}
                  grabCursor={true}
                  centeredSlides={true}
                  slidesPerView={3}
                  coverflowEffect={{
                    rotate: 0,
                    stretch: 0,
                    depth: 40,
                    modifier: 1,
                    slideShadows: false,
                  }}
                  thumbs={{ swiper: thumbsSwiper }}
                  modules={[FreeMode, Navigation, Thumbs]}
                  className="mySwiper-Roadmap"
                >
                  <SwiperSlide className="mySwiper-Roadmap-Slide">
                    <PhaseImg src={phase1} />
                  </SwiperSlide>

                  <SwiperSlide className="mySwiper-Roadmap-Slide">
                    <PhaseImg src={phase2} />
                  </SwiperSlide>

                  <SwiperSlide className="mySwiper-Roadmap-Slide">
                    <PhaseImg src={phase3} />
                  </SwiperSlide>

                  <SwiperSlide className="mySwiper-Roadmap-Slide">
                    <PhaseImg src={phase4} />
                  </SwiperSlide>
                </Swiper>
              </SwiperContainer1366px>
            </ColumnContent>
          </RoadmapColumn>
        </RoadmapRow>
      </RoadmapContent>
    </RoadmapContainer>
  );
};

export default Roadmap;
