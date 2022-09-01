import React, { useEffect } from "react";
import { useRef } from "react";
import { motion } from "framer-motion";

import Aos from "aos";
import "aos/dist/aos.css";

import {
  AnimationContainer,
  AnimationBg,
  AnimationRow,
  AnimationColumn,
  ColumnContent,
  AnimationH1,
  AnimationDes,
  ImgWrapper,
  WatchTrailer,
  TextWrapper,
} from "./AnimationElements";

const Animation = ({ toggleAnim }) => {
  const constraintsRef = useRef(null);

  useEffect(() => {
    Aos.init({});
  }, []);
  return (
    <AnimationContainer>
      <AnimationBg></AnimationBg>

      <AnimationRow>
        <AnimationColumn>
          <ColumnContent data-aos="fade-down" data-aos-duration="1000">
            <ImgWrapper>
              <motion.div className="containerAnim" ref={constraintsRef}>
                <motion.div
                  whileTap={{
                    scale: 0.8,
                    rotate: -360,
                    borderRadius: "100%",
                  }}
                  className="itemAnim"
                  onClick={toggleAnim}
                />
                <motion.div />
                <WatchTrailer>Watch The Trailer</WatchTrailer>
              </motion.div>
            </ImgWrapper>
          </ColumnContent>

          <ColumnContent data-aos="fade-up" data-aos-duration="1000">
            <AnimationH1>Cyber Rabbit: Night Strike</AnimationH1>
            <AnimationDes>
              Nothing was the same since Helium Corp's Tyrannical rule. Now they
              are taking their lives back, one evil AI Construct at a time. Bear
              witness as we show you what the coolest rabbits in the metaverse
              is all about are you ready to hop with us?
            </AnimationDes>
          </ColumnContent>
        </AnimationColumn>
      </AnimationRow>
    </AnimationContainer>
  );
};

export default Animation;
