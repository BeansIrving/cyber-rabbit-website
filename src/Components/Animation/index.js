import React from 'react'
import { AnimationContainer, AnimationBg, VideoBg } from "./AnimationElements"
import video from '../../Videos/rabbitanimation.mp4'

const Animation = () => {
  return (
    <AnimationContainer>
        <AnimationBg>
            <VideoBg id='vid' autoPlay loop playsInline src={video} muted type='video/mp4'>
                    
            </VideoBg>
        </AnimationBg>

        
    </AnimationContainer>
  )
}

export default Animation