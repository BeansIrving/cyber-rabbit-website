import React, {useRef, useEffect, useState} from 'react'
import { useInView } from 'react-intersection-observer'
import { motion, AnimatePresence } from "framer-motion"

import { CyberContainer, CyberBg, CyberContent, CyberRow, CyberColumn,
        CyberRabbit, CyberPants, CyberGear, CyberSuit, CyberHead,
        CyberLHand, CyberRHand, CyberRabbits, CyberGearText,
        CyberSuitText, CyberRHandText, CyberPantsText, 
        CyberLHandText, CyberHeadGearText, CyberRabbitText,
        HidePCContainer, RabbitMobile, CyberRabbitFlexContainer,
        ColumnContent, Description, RabbitGears, CyberRabbitsButton,
        ImgWrapper} from "./CyberLayersElements"

import rabbit from '../../Image/cyberlayersAssets/rabbit.png'
import head from '../../Image/cyberlayersAssets/Head.png'
import gear from '../../Image/cyberlayersAssets/Gear.png'
import suit from '../../Image/cyberlayersAssets/uppersuit.png'
import lhand from '../../Image/cyberlayersAssets/Lefthand.png'
import rhand from '../../Image/cyberlayersAssets/Righthand.png'
import pants from '../../Image/cyberlayersAssets/pants.png'

import headMobile from '../../Image/cyberlayersAssets/mobile/headMobile.png'
import gearMobile from '../../Image/cyberlayersAssets/mobile/gearMobile.png'
import uppersuitMobile from '../../Image/cyberlayersAssets/mobile/uppersuitMobile.png'
import pantsMobile from '../../Image/cyberlayersAssets/mobile/pantsMobile.png'
import lhandMobile from '../../Image/cyberlayersAssets/mobile/lhandMobile.png'
import rhandMobile from '../../Image/cyberlayersAssets/mobile/rhandMobile.png'


import rabbitText from '../../Image/cyberlayersAssets/rabbitText.png'
import gearText from '../../Image/cyberlayersAssets/gearText.png'
import gearheadText from '../../Image/cyberlayersAssets/headgearText.png'
import suitText from '../../Image/cyberlayersAssets/suitText.png'
import lefthandText from '../../Image/cyberlayersAssets/lefthandText.png'
import righthandText from '../../Image/cyberlayersAssets/righthandText.png'
import pantsText from '../../Image/cyberlayersAssets/pantsText.png'


const CyberLayers = () => {
  const [visible, setVisible] = React.useState(false);
  const { ref, inView } = useInView({
		rootMargin: '-100px',
	});


  

  return (
    <CyberContainer id='cyberlayers'>
        <CyberBg>

        </CyberBg>

        <ImgWrapper onClick={() => setVisible(!visible)}>{visible ? 'show' : 'hide'}
        
        <HidePCContainer>
          <CyberRabbitsButton src={rabbit} />
        </HidePCContainer>
        
        
        <AnimatePresence >
            { visible ? 
            <motion.div 
                key="box"
                initial={{y: "50%", opacity:0, scale: 0.5}}
                animate={{y: 0, opacity: 1, scale: 1}}
                exit={{y: "50%", opacity:0, scale: 0.5}}
                transition={{duration: 0.2, ease: "easeOut"}}
                className="box"
                >
                <HidePCContainer>
                
                <CyberRabbits src={rabbit} ref = {ref}/>
        
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
            </motion.div> : null }
        </AnimatePresence>
        </ImgWrapper>

        <CyberContent>
            <CyberRow>
                <CyberColumn>

                  <CyberRabbitFlexContainer>
                    <ColumnContent>
                      <RabbitMobile src={rabbit}/>
                      
                      <Description>
                      Rabbit Specimen:
                      <br></br>
                      <br></br> 
                      Your precious rabbits if it were to be stripped of its augments. Remains to be a formidable foe despite this because of their heightened intelligence. </Description>
                    </ColumnContent>

                    <ColumnContent>

                      <RabbitGears src={headMobile}/>
                      
                      <Description>
                      Cerebral Neuralink:
                      <br></br>
                      <br></br>  
                      Chips that are implanted on your rabbits' brain. Each chip houses a functionality that varies from long-distance communication, to discombobulating waves used for defense and offense. </Description>
                    </ColumnContent>

                    <ColumnContent>

                      <RabbitGears src={gearMobile}/>
                      
                      <Description>
                      Lumbar Augments: 
                      <br></br>
                      <br></br>  
                      Machineries surgically implanted on your rabbits' back that will allow for faster traversing of all terrain.
                      </Description>
                    </ColumnContent>

                    <ColumnContent>

                      <RabbitGears src={uppersuitMobile}/>
                      
                      <Description>
                      Cyber Suit: 
                      <br></br>
                      <br></br>  
                      The prominent piece is its Cyber Chestplate that houses 80% of the Cyber Rabbit's technological augments, autonomizes them from the user if need be, and acts as the central point of control and fail-safe mechanism for the set of tech your rabbit comes with.
                      </Description>
                    </ColumnContent>

                    <ColumnContent>

                      <RabbitGears src={pantsMobile}/>
                      
                      <Description>
                      Polymer-pants:
                      <br></br>
                      <br></br>  
                      Molecularly-structured to act as bridges of hundreds of millions of atoms, the pants allow for utmost protection against blunt-force, stab, and high-radiation attacks, while maintaining, if not improving the user's maneuverability.
                      </Description>
                    </ColumnContent>

                    <ColumnContent>

                      <RabbitGears src={lhandMobile}/>
                      
                      <Description>
                      Sinistric Augments:
                      <br></br>
                      <br></br>  
                      Cyber Rabbit-Sanctioned Tech that are fitted to the left arm of your Cyber Rabbit. They vary from high-grade weapons, to recon technology but all work for the same purpose—Get in and get out, safely. . All the same in efficiency when fitted to your Cyber Rabbit’s arms.                       </Description>
                    </ColumnContent>

                    <ColumnContent>

                      <RabbitGears src={rhandMobile}/>
                      
                      <Description>
                      Dextral Augments: 
                      <br></br>
                      <br></br>  
                      Cyber Rabbit-Sanctioned Tech pieces fitted to the right arm of your Cyber Rabbit. They vary from high-grade weapons, to recon technology but all work for the same purpose—Get in and get out, safely. . All the same in efficiency when fitted to your Cyber Rabbit’s arms. 
                      </Description>
                    </ColumnContent>
                  </CyberRabbitFlexContainer>
                  

                                    

                </CyberColumn>
            </CyberRow>
        </CyberContent>
    </CyberContainer>
  )
}

export default CyberLayers