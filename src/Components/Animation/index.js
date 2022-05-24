import React from 'react'
import { AnimationContainer, AnimationBg,
        AnimationRow, AnimationColumn,
        ColumnContent, AnimationH1,
        AnimationDes, ImgTrailer,
         } from "./AnimationElements"
import watchtrailer from "../../Image/animationAssets/watchtrailer.png"
const Animation = () => {
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
              <ImgTrailer src={watchtrailer}/>
            </ColumnContent>
          </AnimationColumn>
        </AnimationRow>
    </AnimationContainer>
  )
}

export default Animation