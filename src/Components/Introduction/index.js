import React from 'react'
import { IntroContainer, IntroBg,
        IntroContent, IntroRow, IntroColumn, CRH1, CRH01,
        CoolestP, Description, ContainerText, IntroColumn2, VideoBg,
        BtnDiscord } from './IntroElements'
import video from '../../video/Stella.mp4'
import discord from '../../Image/introductionAssets/joindiscord.webp'
const Introduction = () => {
  return (
    <IntroContainer>
      <IntroBg>
            <VideoBg playsInline src={video} autoPlay loop muted type='video/mp4'>
                    
            </VideoBg>
      </IntroBg>

      <IntroContent>
        <IntroRow>
          <IntroColumn>
          <CRH01>001</CRH01>
         
              
              <ContainerText>
                <CRH1>Cyber Rabbit</CRH1>
                <CoolestP>The Coolest Rabbits in the Metaverse</CoolestP>

                <Description>Cyber Rabbits is a Decentralized NFT Project 
                  whose aim is to capitalize on the earning aspect of the NFT 
                  Industry while bordering within the budding technology 
                  that is Metaverse.
                </Description>
              </ContainerText>
          
            
            
          </IntroColumn>

          <IntroColumn2 href="https://discord.com/invite/abQNrteMxF?fbclid=IwAR2odsgxYk4NQ6ba-D2CqIYjEAbelXi40PLEJpKAvxfPjHv6H33t_jj_ulk" target="_blank" rel="noopener">
            <BtnDiscord src={discord}></BtnDiscord>
          </IntroColumn2>
        </IntroRow>
      </IntroContent>
    </IntroContainer>
  )
}

export default Introduction