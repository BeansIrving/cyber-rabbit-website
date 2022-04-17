import React, {useRef, useEffect, useState} from 'react'
import { useInView } from 'react-intersection-observer'
import { CyberContainer, CyberBg, CyberContent, CyberRow, CyberColumn,
        CyberRabbit, CyberPants, CyberGear, CyberSuit, CyberHead,
        CyberLHand, CyberRHand, CyberRabbits, CyberGearText,
        CyberSuitText, CyberRHandText, CyberPantsText, 
        CyberLHandText, CyberHeadGearText, CyberRabbitText,
        HidePCContainer} from "./CyberLayersElements"

import rabbit from '../../Image/cyberlayersAssets/rabbit.png'
import head from '../../Image/cyberlayersAssets/Head.png'
import gear from '../../Image/cyberlayersAssets/Gear.png'
import suit from '../../Image/cyberlayersAssets/uppersuit.png'
import lhand from '../../Image/cyberlayersAssets/Lefthand.png'
import rhand from '../../Image/cyberlayersAssets/Righthand.png'
import pants from '../../Image/cyberlayersAssets/pants.png'

import rabbitText from '../../Image/cyberlayersAssets/rabbitText.png'
import gearText from '../../Image/cyberlayersAssets/gearText.png'
import gearheadText from '../../Image/cyberlayersAssets/headgearText.png'
import suitText from '../../Image/cyberlayersAssets/suitText.png'
import lefthandText from '../../Image/cyberlayersAssets/lefthandText.png'
import righthandText from '../../Image/cyberlayersAssets/righthandText.png'
import pantsText from '../../Image/cyberlayersAssets/pantsText.png'


const CyberLayers = () => {

  const { ref, inView } = useInView({
		rootMargin: '-100px',
	});


  

  return (
    <CyberContainer>
        <CyberBg>

        </CyberBg>

        <HidePCContainer>
          

                
        <CyberRabbits src={rabbit}  ref={ref} />

        <CyberRabbitText src={rabbitText} className={inView ? 'animation' : ''}/>


        <CyberHead src={head} className={inView ? 'animation' : ''}/>

        <CyberHeadGearText src={gearheadText} className={inView ? 'animation' : ''}/>

        <CyberGear src={gear} className={inView ? 'animation' : ''}/>

        <CyberGearText src={gearText} className={inView ? 'animation' : ''}/>  

        <CyberSuit src={suit} className={inView ? 'animation' : ''}/>

        <CyberSuitText src={suitText} className={inView ? 'animation' : ''}/>

        <CyberLHand src={lhand} className={inView ? 'animation' : ''}/>

        <CyberLHandText src={lefthandText} className={inView ? 'animation' : ''}/>

        <CyberRHand src={rhand} className={inView ? 'animation' : ''}/>

        <CyberRHandText src={righthandText} className={inView ? 'animation' : ''}/>

        <CyberPants src={pants} className={inView ? 'animation' : ''}/>

        <CyberPantsText src={pantsText} className={inView ? 'animation' : ''}/>

        
        </HidePCContainer>

        <CyberContent>
            <CyberRow>
                <CyberColumn>

                                    

                </CyberColumn>
            </CyberRow>
        </CyberContent>
    </CyberContainer>
  )
}

export default CyberLayers