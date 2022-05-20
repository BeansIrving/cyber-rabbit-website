import React from 'react'
import { AnimationContainer, AnimationBg, VideoBg } from "./AnimationElements"

const Animation = () => {
  return (
    <AnimationContainer>
        <AnimationBg>
            <VideoBg id='vid' autoPlay loop playsInline muted type='video/mp4'>
                    
            </VideoBg>
        </AnimationBg>

        
    </AnimationContainer>
  )
}

export default Animation