import React, {useRef, useEffect, useState} from 'react'
import { useInView } from 'react-intersection-observer'
import { CyberContainer, CyberBg, CyberContent, CyberRow, CyberColumn,
        CyberRabbit, CyberPants, CyberGear, CyberSuit, CyberHead,
        CyberLHand, CyberRHand} from "./CyberLayersElements"

import rabbit from '../../Image/cyberlayersAssets/rabbit.png'
import head from '../../Image/cyberlayersAssets/Head.png'
import gear from '../../Image/cyberlayersAssets/Gear.png'
import suit from '../../Image/cyberlayersAssets/uppersuit.png'
import lhand from '../../Image/cyberlayersAssets/Lefthand.png'
import rhand from '../../Image/cyberlayersAssets/Righthand.png'
import pants from '../../Image/cyberlayersAssets/pants.png'
const CyberLayers = () => {

  const { ref, inView } = useInView({
		rootMargin: '-100px',
	});
  return (
    <CyberContainer>
        <CyberBg>

        </CyberBg>

        <CyberRabbit src={rabbit} ref={ref}/>

        <CyberHead src={head} className={inView ? 'animation' : ''}/>

        <CyberGear src={gear} className={inView ? 'animation' : ''}/>

        <CyberSuit src={suit} className={inView ? 'animation' : ''}/>

        <CyberLHand src={lhand} className={inView ? 'animation' : ''}/>

        <CyberRHand src={rhand} className={inView ? 'animation' : ''}/>

        <CyberPants src={pants} className={inView ? 'animation' : ''}/>

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