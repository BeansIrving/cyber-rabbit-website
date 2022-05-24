import React from 'react'
import { useRef } from "react";
import { motion } from "framer-motion";
import { AnimationContainer, AnimationBg,
        AnimationRow, AnimationColumn,
        ColumnContent, AnimationH1,
        AnimationDes, ImgWrapper,
        WatchTrailer, 
         } from "./AnimationElements"
import watchtrailer from "../../Image/animationAssets/watchtrailer.png"
const Animation = ({toggleAnim}) => {
  const constraintsRef = useRef(null);
  return (
    <AnimationContainer>
        <AnimationBg>
            
        </AnimationBg>

        <AnimationRow>
          <AnimationColumn>
            <ColumnContent>
              <AnimationH1>Cyber Rabbit: Night Strike</AnimationH1>
              <AnimationDes>
              Nothing was the same since Helium Corp's Tyrannical rule.
              Now they are taking their lives back, one evil AI Construct at a time. 
              <br></br>
              Bear witness as we show you what the coolest rabbits in the metaverse is all about 
              <br></br>
              are you ready to hop with us?
            </AnimationDes>
            </ColumnContent>
              
            <ColumnContent>

            <ImgWrapper>
              <motion.div className="containerAnim" ref={constraintsRef}>
              <motion.div
                whileTap={{
                  scale: 0.8,
                  rotate: -360,
                  borderRadius: "100%"
                }} 
              className="itemAnim" onClick={toggleAnim}/>
              <motion.div/> 
              </motion.div>
            </ImgWrapper>
            
            <WatchTrailer>Watch the teaser trailer</WatchTrailer>

            </ColumnContent>
          </AnimationColumn>
        </AnimationRow>
    </AnimationContainer>
  )
}

export default Animation